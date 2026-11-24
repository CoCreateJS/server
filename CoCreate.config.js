export default {
    organization_id: "",
    key: "",
    host: "",
    workers: 2, // Number of worker processes
    manager: {
        organization_id: "5ff747727005da1c272740ab", // Static CoCreate manager organization ID
        host: "CoCreateJS.com", // Manager API host; manager.js sends requests to https://<host>/
        enabled: true,
        // apiKey is supplied through the startup/runtime config, never baked into the bundle.
    },

    telemetry: {
        "enabled": true,
        "interval": 1000,
        "flush": {
            "interval": 240000,
            "memory": [
                { "on": 75, "off": 60 },
                { "on": 85, "off": 80 },
                { "on": 90, "off": 85 }
            ]
        },
        "retentionDays": 30
    },

    socket: {
        defer: {
            memory: { on: 85, off: 80 },
            duration: 3000
        }
    },

    state: {
        enabled: true,
        proxy: { memory: { on: 75, off: 60 } },
        cordon: { memory: { on: 90, off: 85 } }
    },

    // Horizontal scaling configuration
    autoscaler: {
        horizontal: {
            enabled: true, // Enable or disable horizontal scaling
            memoryThreshold: "70%", // Memory usage threshold for scaling
            cpuThreshold: "70%", // CPU usage threshold for scaling
            maxServers: 10 // Maximum number of servers to scale out to
        },
        vertical: false // Vertical scaling not enabled
    },
    ai: {

    },

    /**
     * @namespace projects
     * @description Standalone apps, environments, or platforms integrated with the Poly Repo CLI.
     * * The Poly Repo CLI (initiated via the 'coc' command) merges the repo details from 'projects' and 'modules' 
     * (excluding 'plugins') to execute cross-repository actions seamlessly.
     * * @property {string} path - Local relative workspace path. Defines the workspace tree structure, determining where the repository is cloned in a new environment so the CLI can locate it during operations.
     * @property {string} repo - Git repository URL.
     * @property {string[]} [exclude] - Array of strings used to exclude the project from specific CLI commands (e.g., ["git"] or ["fs/webpack"]).
     */
    projects: {
        server: {
            path: "../server",
            repo: "github.com/CoCreateJS/server.git",
            exclude: ["git"]
        }
    },

    /**
     * @property {string} moduleOutputPath
     * @description Defines the destination file path where the build system (e.g., ModuleGenerator Webpack plugin)
     * will save the dynamically generated module entry file. This file contains the automated import and lazy-loading logic.
     */
    moduleOutputPath: "./CoCreate.index.js",

    /**
     * @namespace modules
     * @description Configures core modules, storage adapters, and external API libraries.
     * For development environments, the Poly Repo CLI reads the 'path' and 'repo' keys from these objects.
     */
    modules: {
        // --- Core Server & Deployment Modules ---
        cluster: {
            import: "@cocreate/cluster",
            path: "../modules/cluster",
            repo: "github.com/CoCreateJS/cluster.git"
        },
        "autoscaler": {
            import: "@cocreate/autoscaler",
            path: "../modules/autoscaler",
            repo: "github.com/CoCreateJS/autoscaler.git"
        },
        "telemetry": {
            import: "@cocreate/telemetry",
            path: "../modules/telemetry",
            repo: "github.com/CoCreateJS/telemetry.git"
        },
        "crud": {
            import: "@cocreate/crud",
            path: "../modules/crud",
            repo: "github.com/CoCreateJS/crud-server.git"
        },
        "tls": {
            import: "@cocreate/tls",
            path: "../modules/tls",
            repo: "github.com/CoCreateJS/tls.git"
        },
        authenticate: {
            import: "@cocreate/authenticate",
            path: "../modules/authenticate",
            repo: "github.com/cocreatejs/CoCreate-authenticate.git"
        },
        authorize: {
            import: "@cocreate/authorize",
            path: "../modules/authorize",
            repo: "github.com/cocreatejs/CoCreate-authorize.git"
        },
        "socket": {
            import: "@cocreate/socket",
            path: "../modules/socket",
            repo: "github.com/CoCreateJS/socket.git",
        },
        "file": {
            import: "@cocreate/file",
            path: "../modules/file",
            repo: "github.com/CoCreateJS/file.git",
        },
        "sitemap": {
            import: "@cocreate/sitemap",
            path: "../modules/sitemap",
            repo: "github.com/CoCreateJS/sitemap.git"
        },
        "cron": {
            import: "@cocreate/cron",
            path: "../modules/cron",
            repo: "github.com/CoCreateJS/cron.git"
        },
        "usage": {
            import: "@cocreate/usage",
            path: "../modules/usage",
            repo: "github.com/CoCreateJS/usage.git"
        },
        // --- Standard Client/Server Modules ---
        config: {
            import: "@cocreate/config",
            path: "../modules/config",
            repo: "github.com/cocreatejs/CoCreate-config.git"
        },
        api: {
            import: "@cocreate/api",
            path: "../modules/api",
            repo: "github.com/cocreatejs/CoCreate-api.git"
        },
        agent: {
            import: "@cocreate/agent",
            path: "../modules/agent",
            repo: "github.com/CoCreateJS/agent.git"
        },
        mcp: {
            import: "@cocreate/mcp",
            path: "../modules/mcp",
            repo: "github.com/CoCreateJS/mcp.git"
        },
        "lazy-loader": {
            import: "@cocreate/lazy-loader",
            path: "../modules/lazy-loader",
            repo: "github.com/cocreatejs/CoCreate-lazy-loader.git"
        },
        notification: {
            import: "@cocreate/notification",
            path: "../modules/notification",
            repo: "github.com/cocreatejs/CoCreate-notification.git"
        },
        organizations: {
            import: "@cocreate/organizations",
            path: "../modules/organizations",
            repo: "github.com/cocreatejs/CoCreate-organizations.git"
        },
        users: {
            import: "@cocreate/users",
            path: "../modules/users",
            repo: "github.com/cocreatejs/CoCreate-users.git"
        },
        workflow: {
            import: "@cocreate/workflow",
            path: "../modules/workflow",
            repo: "github.com/CoCreateJS/workflow.git"
        },
        utils: {
            import: "@cocreate/utils",
            path: "../modules/utils",
            repo: "github.com/cocreatejs/CoCreate-utils.git"
        },

        // --- Dev Modules ---
        cli: {
            import: "@cocreate/cli",
            path: "../modules/cli",
            repo: "github.com/cocreatejs/CoCreate-cli.git"
        }
    },
    plugins: {
        ai: {
            import: "@cocreate/ai",
            path: "../plugins/server-ai",
            repo: "github.com/frankpagan/CoCreate-server-ai.git"
        }
    }
};
