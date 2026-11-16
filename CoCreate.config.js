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
        "collectionInterval": 1000,
        "writeInterval": 240000,
        "retentionDays": 30,
        "broadcast": false,
        "scaleUpMemoryThreshold": 85,
        "safetyLimits": {
            "cordonMemoryThreshold": 90,
            "cordonCpuThreshold": 90
        }
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
            path: "../cluster",
            repo: "github.com/CoCreateJS/cluster.git"
        },
        "autoscaler": {
            import: "@cocreate/autoscaler",
            path: "../autoscaler",
            repo: "github.com/CoCreateJS/autoscaler.git"
        },
        "telemetry": {
            import: "@cocreate/telemetry",
            path: "../telemetry",
            repo: "github.com/CoCreateJS/telemetry.git"
        },
        "crud": {
            import: "@cocreate/crud",
            path: "../crud",
            repo: "github.com/CoCreateJS/crud-server.git"
        },
        "tls": {
            import: "@cocreate/tls",
            path: "../tls",
            repo: "github.com/CoCreateJS/tls.git"
        },
        authenticate: {
            import: "@cocreate/authenticate",
            path: "../authenticate",
            repo: "github.com/cocreatejs/CoCreate-authenticate.git"
        },
        authorize: {
            import: "@cocreate/authorize",
            path: "../authorize",
            repo: "github.com/cocreatejs/CoCreate-authorize.git"
        },
        "socket": {
            import: "@cocreate/socket",
            path: "../socket",
            repo: "github.com/CoCreateJS/socket.git",
        },
        "file": {
            import: "@cocreate/file",
            path: "../file",
            repo: "github.com/CoCreateJS/file.git",
        },
        "sitemap": {
            import: "@cocreate/sitemap",
            path: "../sitemap",
            repo: "github.com/CoCreateJS/sitemap.git"
        },
        "cron": {
            import: "@cocreate/cron",
            path: "../cron",
            repo: "github.com/CoCreateJS/cron.git"
        },
        "usage": {
            import: "@cocreate/usage",
            path: "../usage",
            repo: "github.com/CoCreateJS/usage.git"
        },

        // --- Database & Storage Modules ---
        "amazon-redshift": {
            import: "@cocreate/amazon-redshift",
            path: "../../storages/amazon-redshift",
            repo: "github.com/cocreatejs/CoCreate-amazon-redshift.git"
        },
        auroradb: {
            import: "@cocreate/auroradb",
            path: "../../storages/auroradb",
            repo: "github.com/cocreatejs/CoCreate-auroradb.git"
        },
        cockroachdb: {
            import: "@cocreate/cockroachdb",
            path: "../../storages/cockroachdb",
            repo: "github.com/cocreatejs/CoCreate-cockroachdb.git"
        },
        cosmosdb: {
            import: "@cocreate/cosmosdb",
            path: "../../storages/cosmosdb",
            repo: "github.com/cocreatejs/CoCreate-cosmosdb.git"
        },
        documentdb: {
            import: "@cocreate/documentdb",
            path: "../../storages/documentdb",
            repo: "github.com/cocreatejs/CoCreate-documentdb.git"
        },
        dqlite: {
            import: "@cocreate/dqlite",
            path: "../../storages/dqlite",
            repo: "github.com/cocreatejs/CoCreate-dqlite.git"
        },
        dynamodb: {
            import: "@cocreate/dynamodb",
            path: "../../storages/dynamodb",
            repo: "github.com/cocreatejs/CoCreate-dynamodb.git"
        },
        ferretdb: {
            import: "@cocreate/ferretdb",
            path: "../../storages/ferretdb",
            repo: "github.com/cocreatejs/CoCreate-ferretdb.git"
        },
        firestore: {
            import: "@cocreate/firestore",
            path: "../../storages/firestore",
            repo: "github.com/cocreatejs/CoCreate-firestore.git"
        },
        mariadb: {
            import: "@cocreate/mariadb",
            path: "../../storages/mariadb",
            repo: "github.com/cocreatejs/CoCreate-mariadb.git"
        },
        mongodb: {
            import: "@cocreate/mongodb",
            path: "../../storages/mongodb",
            repo: "github.com/cocreatejs/CoCreate-mongodb.git"
        },
        mysql: {
            import: "@cocreate/mysql",
            path: "../../storages/mysql",
            repo: "github.com/cocreatejs/CoCreate-mysql.git"
        },
        oracledb: {
            import: "@cocreate/oracledb",
            path: "../../storages/oracledb",
            repo: "github.com/cocreatejs/CoCreate-oracledb.git"
        },
        planetscale: {
            import: "@cocreate/planetscale",
            path: "../../storages/planetscale",
            repo: "github.com/cocreatejs/CoCreate-planetscale.git"
        },
        postgresql: {
            import: "@cocreate/postgresql",
            path: "../../storages/postgresql",
            repo: "github.com/cocreatejs/CoCreate-postgresql.git"
        },
        rqlite: {
            import: "@cocreate/rqlite",
            path: "../../storages/rqlite",
            repo: "github.com/cocreatejs/CoCreate-rqlite.git"
        },
        qdrant: {
            import: "@cocreate/qdrant",
            path: "../../storages/qdrant",
            repo: "github.com/cocreatejs/CoCreate-qdrant.git"
        },
        sqlite: {
            import: "@cocreate/sqlite",
            path: "../../storages/sqlite",
            repo: "github.com/cocreatejs/CoCreate-sqlite.git"
        },
        tidb: {
            import: "@cocreate/tidb",
            path: "../../storages/tidb",
            repo: "github.com/cocreatejs/CoCreate-tidb.git"
        },
        timescaledb: {
            import: "@cocreate/timescaledb",
            path: "../../storages/timescaledb",
            repo: "github.com/cocreatejs/CoCreate-timescaledb.git"
        },
        turso: {
            import: "@cocreate/turso",
            path: "../../storages/turso",
            repo: "github.com/cocreatejs/CoCreate-turso.git"
        },
        yugabytedb: {
            import: "@cocreate/yugabytedb",
            path: "../../storages/yugabytedb",
            repo: "github.com/cocreatejs/CoCreate-yugabytedb.git"
        },

        // --- Standard Client/Server Modules ---
        config: {
            import: "@cocreate/config",
            path: "../config",
            repo: "github.com/cocreatejs/CoCreate-config.git"
        },
        api: {
            import: "@cocreate/api",
            path: "../api",
            repo: "github.com/cocreatejs/CoCreate-api.git"
        },
        "lazy-loader": {
            import: "@cocreate/lazy-loader",
            path: "../lazy-loader",
            repo: "github.com/cocreatejs/CoCreate-lazy-loader.git"
        },
        notification: {
            import: "@cocreate/notification",
            path: "../notification",
            repo: "github.com/cocreatejs/CoCreate-notification.git"
        },
        organizations: {
            import: "@cocreate/organizations",
            path: "../organizations",
            repo: "github.com/cocreatejs/CoCreate-organizations.git"
        },
        users: {
            import: "@cocreate/users",
            path: "../users",
            repo: "github.com/cocreatejs/CoCreate-users.git"
        },
        workflows: {
            import: "@cocreate/workflows",
            path: "../workflows",
            repo: "github.com/CoCreateJS/CoCreate-workflows.git"
        },
        utils: {
            import: "@cocreate/utils",
            path: "../utils",
            repo: "github.com/cocreatejs/CoCreate-utils.git"
        },

        // --- Dev Modules ---
        cli: {
            import: "@cocreate/cli",
            path: "../cli",
            repo: "github.com/cocreatejs/CoCreate-cli.git"
        }
    },
    plugins: {
        ai: {
            import: "@cocreate/ai",
            path: "../../plugins/server-ai",
            repo: "github.com/frankpagan/CoCreate-server-ai.git"
        }
    }
};
