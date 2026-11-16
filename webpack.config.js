/********************************************************************************
 * Copyright (C) 2026 CoCreate and Contributors.
 *
 * Licensed under GNU AGPLv3.
 ********************************************************************************/

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import webpack from "webpack";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
class RuntimeAssetsPlugin {
    apply(compiler) {
        compiler.hooks.afterEmit.tap("RuntimeAssetsPlugin", () => {
            // Ship optional host setup as a standalone helper, outside the runtime bundle.
            fs.copyFileSync(path.join(__dirname, "startup.js"), path.join(compiler.options.output.path, "startup.js"));
            fs.writeFileSync(
                path.join(compiler.options.output.path, "package.json"),
                `${JSON.stringify({ private: true, type: "module" }, null, 2)}\n`
            );

        });
    }
}

export default {
    mode: "production",
    target: "node18",
    entry: "./src/index.js",
    experiments: {
        outputModule: true
    },
    resolve: {
        extensions: [".js", ".mjs", ".cjs", ".json"],
        fullySpecified: false
    },
    output: {
        path: path.resolve(__dirname, "dist/node"),
        filename: "index.js",
        library: { type: "module" },
        clean: true,
        globalObject: "this"
    },
    optimization: {
        minimize: false,
        concatenateModules: false,
        splitChunks: false,
        runtimeChunk: false
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
        new RuntimeAssetsPlugin()
    ],
    performance: {
        hints: false
    },
    devtool: false
};
