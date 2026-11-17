/********************************************************************************
 * Copyright (C) 2026 CoCreate and Contributors.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 ********************************************************************************/

import server from '@cocreate/cluster';
import config from '@cocreate/config';
import { ObjectId } from '@cocreate/utils';
import db from '@cocreate/db';
import crud from '@cocreate/crud';
import kms from '@cocreate/kms';
import authenticate from '@cocreate/authenticate';
import authorize from '@cocreate/authorize';
import api from '@cocreate/api';
import workflow from '@cocreate/workflows';
import * as AST from '@cocreate/ast/server';

try {
    const { server_id, host, organization_id } = await config.prompt({
        organization_id: '',
        host: '',
        server_id: ''
    });

    server.id = server_id || ObjectId().toString();
    server.host = host || null;
    server.organization_id = organization_id || null;

    server.db = await db.init(server);
    server.crud = await crud.init(server);
    server.kms = await kms.init(server);

    server.authenticate = authenticate.init(server);
    server.authorize = authorize;
    server.api = await api.init(server);
    server.ast = AST;
    server.workflow = await workflow.init(server);

    if (server.isPrimary) {
        const autoscaler = await import('@cocreate/autoscaler');
        server.autoscaler = await autoscaler.init(server);
        await import('@cocreate/cron');
    }

    if (server.isWorker) {
        server.telemetry = await (await import('@cocreate/telemetry')).default.init(server);
        server.usage = await (await import('@cocreate/usage')).default.init(server);
        server.tls = await (await import('@cocreate/tls')).default.init(server);
        server.files = await (await import('@cocreate/file/server')).default.init(server);
        server.mcp = await (await import('@cocreate/mcp')).default.init(server);
        server.socket = new (await import('@cocreate/socket')).SocketServer(server);
        await (await import('@cocreate/users')).init(server);

    }

    await server.init();

    if (server.isWorker) {
        server.http.listen(80, () => {
            console.log(`[@cocreate/cluster] [WORKER ${server.workerId}] HTTP listening on ${80}`);
        });

        server.https.listen(443, () => {
            console.log(`[@cocreate/cluster] [WORKER ${server.workerId}] HTTPS listening on ${443}`);
        });
    }
} catch (error) {
    console.error('[@cocreate/server] Critical error during server bootstrap:', error);
    process.exit(1);
}
