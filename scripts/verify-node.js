import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const directory = path.join(root, "dist/node");
const storageSourceRoot = `${path.resolve(root, "../storages")}${path.sep}`;
const packageManifest = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const { default: config } = await import(pathToFileURL(path.join(root, "CoCreate.config.js")));
execFileSync(process.execPath, ["--check", path.join(directory, "index.js")]);

const files = {};
function fingerprint(folder) {
    for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
        const file = path.join(folder, entry.name);
        if (entry.isDirectory()) fingerprint(file);
        else if (entry.name !== "build-manifest.json") {
            const contents = fs.readFileSync(file);
            files[path.relative(directory, file)] = {
                bytes: contents.length,
                sha256: createHash("sha256").update(contents).digest("hex")
            };
        }
    }
}
fingerprint(directory);
const repositories = {};
for (const [group, entries] of Object.entries({ modules: config.modules })) {
    for (const [name, entry] of Object.entries(entries || {})) {
        if (!entry?.path) continue;
        const repositoryPath = path.resolve(root, entry.path);
        if (repositoryPath.startsWith(storageSourceRoot)) continue;
        const manifestPath = path.join(repositoryPath, "package.json");
        if (!fs.existsSync(manifestPath)) {
            throw new Error(`Missing configured ${group} package: ${name} (${repositoryPath})`);
        }
        const sourceManifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
        repositories[`${group}.${name}`] = {
            package: sourceManifest.name || null,
            version: sourceManifest.version || null,
            commit: execFileSync("git", ["rev-parse", "HEAD"], {
                cwd: repositoryPath,
                encoding: "utf8"
            }).trim()
        };
    }
}
fs.writeFileSync(path.join(directory, "build-manifest.json"), JSON.stringify({
    builtAt: new Date().toISOString(),
    package: packageManifest.name,
    packageVersion: packageManifest.version,
    node: process.version,
    platform: process.platform,
    arch: process.arch,
    commit: execFileSync("git", ["rev-parse", "HEAD"], { cwd: root, encoding: "utf8" }).trim(),
    repositories,
    files
}, null, 2) + "\n");
console.log(`Verified ${packageManifest.name}@${packageManifest.version}, server syntax, and configured modules; wrote build-manifest.json.`);
