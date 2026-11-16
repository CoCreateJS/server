# CoCreateServer

### One runtime. Any app. Every cloud.

**An AI-native, distributed JavaScript runtime for building, executing, connecting, deploying, and operating applications across any infrastructure.**

CoCreateServer brings application execution, real-time communication, databases, security, workflows, distributed computing, and cloud orchestration together in one extensible runtime.

Run APIs. Connect databases. Execute workflows. Deploy infrastructure. Scale across regions. Give authorized AI agents the tools to operate your applications and business.

Built as the server-side foundation of **CoCreateJS**, CoCreateServer enables developers to move beyond traditional application hosting toward a connected environment where applications, services, data, infrastructure, and intelligent agents operate together.

**One runtime. From application logic to distributed infrastructure.**

---

## Table of Contents

- [Why CoCreateServer?](#why-cocreateserver)
- [What Is CoCreateServer?](#what-is-cocreateserver)
- [Quick Start](#quick-start)
- [Core Architecture](#core-architecture)
- [Primary and Worker Processes](#primary-and-worker-processes)
- [Distributed Runtime Mesh](#distributed-runtime-mesh)
- [Networking and Application Services](#networking-and-application-services)
- [Unified Data and Database Adapters](#unified-data-and-database-adapters)
- [CoCreateDB Integration](#cocreatedb-integration)
- [AI-Native Runtime and CoCreateMCP](#ai-native-runtime-and-cocreatemcp)
- [Business Automation and Application Workflows](#business-automation-and-application-workflows)
- [Structured Execution with CoCreateAST](#structured-execution-with-cocreateast)
- [Security and Key Management](#security-and-key-management)
- [Infrastructure Orchestration](#infrastructure-orchestration)
- [Distributed Scaling and Geographic Routing](#distributed-scaling-and-geographic-routing)
- [Real-Time Communication and Synchronization](#real-time-communication-and-synchronization)
- [Modularity and Extensibility](#modularity-and-extensibility)
- [Self-Contained Application Infrastructure](#self-contained-application-infrastructure)
- [Architecture Overview](#architecture-overview)
- [Use Cases](#use-cases)
- [Design Philosophy](#design-philosophy)
- [CoCreateJS Ecosystem](#cocreatejs-ecosystem)
- [Contributing](#contributing)
- [License](#license)
- [Resources](#resources)

---

## Why CoCreateServer?

Modern applications require far more than an HTTP server.

Developers often need to assemble and maintain independent systems for:

- Application hosting
- HTTP and WebSocket communication
- API routing
- Database connectivity
- Authentication and authorization
- Key and secret management
- Background jobs
- Scheduled automation
- Distributed workers
- Service discovery
- Cluster coordination
- Deployment pipelines
- Cloud provisioning
- Load balancing
- Monitoring and autoscaling
- AI integrations
- Business automation

Each introduces additional configuration, dependencies, operational complexity, and integration overhead.

**CoCreateServer takes a different approach.**

Instead of treating these responsibilities as unrelated infrastructure services, CoCreateServer provides a common JavaScript runtime where application capabilities can be connected, executed, and coordinated through consistent interfaces.

The objective is not to eliminate every external service.

It is to make fewer services mandatory while preserving the freedom to integrate with existing infrastructure.

### One Runtime, Multiple Responsibilities

CoCreateServer is designed to function as:

- An application server
- An API server
- A real-time communication server
- A distributed worker runtime
- A database connectivity layer
- A workflow execution environment
- An infrastructure orchestration platform
- An AI-accessible capability platform

Applications can use these responsibilities independently or together.

### From Code to Operations

Traditional development often separates writing application code from deploying, managing, and operating it.

CoCreateServer connects these stages through a shared runtime environment.

```text
Application Code
       |
       v
CoCreateServer
       |
       +-- APIs and Networking
       |
       +-- Data and Storage
       |
       +-- Workflows and Automation
       |
       +-- Security and Permissions
       |
       +-- Distributed Execution
       |
       +-- Infrastructure Operations
       |
       +-- AI-Accessible Tools
```

**Build the application. Run the application. Operate the application.**

---

## What Is CoCreateServer?

CoCreateServer is a modular JavaScript runtime built on Node.js.

It provides application-level interfaces for executing services, managing workers, connecting storage, coordinating distributed nodes, and integrating infrastructure.

Unlike a conventional web server focused primarily on handling HTTP requests, CoCreateServer is designed to coordinate the broader application environment.

### A Runtime, Not Just a Framework

A framework generally provides conventions and APIs for building an application.

A runtime provides the environment in which application capabilities execute.

CoCreateServer extends that execution environment with reusable operational capabilities.

Applications can interact with the runtime to:

- Register routes
- Execute APIs
- Communicate over WebSockets
- Access databases
- Load modules
- Schedule tasks
- Coordinate workers
- Execute workflows
- Manage runtime configuration
- Connect infrastructure providers
- Expose authorized capabilities to AI clients

### Independent by Design

CoCreateServer can operate independently of CoCreateClient.

It can support:

- Plain JavaScript applications
- Existing frontend frameworks
- REST APIs
- Real-time applications
- Backend services
- Business applications
- Distributed workloads
- AI-connected applications

Developers do not need to rebuild their frontend to adopt the runtime.

### Modular by Default

CoCreateServer uses JavaScript modules to extend its capabilities.

Applications can load only the functionality required for their environment.

Different processes and nodes can execute different responsibilities while participating in the same distributed system.

---

## Quick Start

### Requirements

- Node.js
- npm or another compatible package manager
- A supported operating system

Specific Node.js version requirements depend on the release.

### Installation

```bash
npm install @cocreate/server
```

### Initialize CoCreateServer

```javascript
import server from '@cocreate/server';

await server.init();
```

The runtime initializes its configured capabilities and prepares the application environment.

### Register an HTTP Route

```javascript
import server from '@cocreate/server';

await server.init();

if (server.isWorker) {
  server.routes.set('/health', async (req, res) => {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      status: 'healthy'
    }));
  });
}
```

### Separate Primary and Worker Responsibilities

```javascript
import server from '@cocreate/server';

await server.init();

if (server.isPrimary) {
  console.log('Primary process initialized');
}

if (server.isWorker) {
  console.log('Worker process initialized');
}
```

### Load Additional Modules

```javascript
if (server.isPrimary) {
  await import('@cocreate/cron-jobs');
}

if (server.isWorker) {
  await import('@cocreate/users');
  await import('@cocreate/organizations');
}
```

Modules can be assigned to the processes responsible for executing them.

The examples illustrate the runtime's JavaScript API conventions. Consult the installed version and individual modules for configuration and available methods.

---

## Core Architecture

CoCreateServer is built around a modular runtime object.

The runtime provides access to configured application capabilities through JavaScript interfaces.

```text
                    CoCreateServer
                          |
          +---------------+---------------+
          |               |               |
          v               v               v
       Primary          Workers        Modules
          |               |               |
     Coordination     Application      Extensions
     Lifecycle        Execution        Integrations
          |               |               |
          +---------------+---------------+
                          |
                          v
                    Runtime APIs
                          |
          +---------------+---------------+
          |               |               |
          v               v               v
       Networking        Storage        Workflows
          |               |               |
          +---------------+---------------+
                          |
                          v
                   Distributed Mesh
                          |
                    Infrastructure
```

### Runtime Responsibilities

The runtime can coordinate several categories of functionality.

**Execution**

Application processes, workers, jobs, and services.

**Connectivity**

HTTP, HTTPS, WebSockets, events, and server-to-server communication.

**Data**

CRUD operations, database adapters, native storage, and synchronization.

**Security**

Authentication, permissions, credentials, and protected operations.

**Automation**

Structured workflows, scheduled jobs, and application events.

**Infrastructure**

Provisioning, deployment, cluster coordination, scaling, and recovery.

**AI Integration**

Discoverable, authorized tools exposed through CoCreateMCP.

These responsibilities are modular and depend on the installed components and configured integrations.

---

## Primary and Worker Processes

CoCreateServer distinguishes between primary and worker processes.

### Primary Process

The primary process coordinates responsibilities associated with the local runtime node.

Depending on configuration, these may include:

- Worker lifecycle management
- Process coordination
- Runtime initialization
- Scheduled services
- Infrastructure operations
- Local resource management
- Cluster communication

### Worker Processes

Workers execute application responsibilities.

Depending on configuration, workers may handle:

- HTTP requests
- WebSocket connections
- Application routes
- API operations
- Business logic
- Database requests
- Real-time events
- Background workloads

### Process-Specific Modules

Modules can be loaded according to process responsibilities.

```javascript
if (server.isPrimary) {
  await import('@cocreate/cron-jobs');
}

if (server.isWorker) {
  await import('@cocreate/users');
}
```

This avoids requiring every process to initialize every application capability.

### No Permanent Global Primary

Primary and worker describe local process responsibilities.

They do not imply that one permanent global server must control every node in a distributed deployment.

Each runtime node can manage its local processes while participating in the broader mesh.

---

## Distributed Runtime Mesh

CoCreateServer is designed to coordinate multiple runtime nodes across servers, regions, and infrastructure providers.

### Nodes as Participants

A distributed deployment may contain multiple CoCreateServer nodes.

Each node can provide application execution, networking, and configured services.

Nodes communicate through supported mesh and messaging mechanisms.

```text
                     CoCreate Mesh
                           |
           +---------------+---------------+
           |               |               |
           v               v               v
        Node A          Node B          Node C
           |               |               |
        Primary         Primary         Primary
           |               |               |
        Workers         Workers         Workers
           |               |               |
           +---------------+---------------+
                           |
                    Shared Services
```

### Distributed Coordination

The mesh architecture is intended to support:

- Node discovery
- Server-to-server communication
- Distributed messaging
- Worker coordination
- Service routing
- Application synchronization
- Health monitoring
- Workload distribution
- Node provisioning and recovery

### Independent Nodes

Nodes may operate across different cloud providers and regions.

A node can maintain local execution responsibilities while communicating with other nodes.

The architecture aims to avoid unnecessary dependence on a single centralized execution server.

### Extensible Distributed Services

The mesh provides a foundation for distributed application capabilities, including synchronized data, shared events, workload routing, and infrastructure automation.

The guarantees of each distributed service depend on its implementation, consistency model, and failure-handling strategy.

---

## Networking and Application Services

CoCreateServer provides networking capabilities for building connected applications.

### HTTP and HTTPS

The runtime supports HTTP-based application services and secure communication through TLS-enabled configurations.

Applications can register routes and implement custom request handling.

```javascript
server.routes.set('/api/status', async (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify({
    service: 'CoCreateServer',
    status: 'running'
  }));
});
```

### WebSockets

WebSocket communication enables persistent connections between clients and servers.

Applications can use configured socket modules for:

- Real-time updates
- Messaging
- Notifications
- Subscriptions
- Collaborative applications
- Presence
- Event distribution

### Application APIs

CoCreateServer can expose APIs for:

- CRUD operations
- Authentication
- User management
- Organization management
- Business operations
- File handling
- Custom application logic
- Workflow execution
- Infrastructure management

### Existing Application Integration

CoCreateServer can operate alongside existing application stacks.

Developers can use its APIs, real-time communication, or infrastructure capabilities without adopting CoCreateClient.

---

## Unified Data and Database Adapters

### Database Freedom

CoCreateServer is designed to connect applications to multiple database technologies through a consistent data-access model.

Its storage architecture includes more than 27 adapter and provider mappings, including compatibility layers for related database systems.

Supported database families and integrations include:

- MongoDB
- PostgreSQL
- MySQL
- SQLite
- MariaDB
- CockroachDB
- Amazon DynamoDB
- Google Firestore
- Azure Cosmos DB
- Amazon DocumentDB
- FerretDB
- PlanetScale
- Amazon Aurora
- Oracle Database integrations
- Other compatible storage systems

Some providers share a common underlying driver or protocol adapter.

### A Unified Data Vocabulary

CoCreateServer uses consistent concepts across supported storage integrations.

- `array` — a collection or group of objects
- `object` — an individual structured record
- `key` — a property, including nested paths
- `filter` — criteria for selecting data
- `sort` — ordering criteria
- `limit` — result constraints

### CRUD Operations

Applications can perform structured data operations through compatible modules.

```javascript
crud.send({
  method: 'object.read',
  array: 'users',
  filter: {
    query: {
      active: true
    },
    sort: {
      created: -1
    },
    limit: 25
  }
});
```

### Storage Independence

The objective is to separate application behavior from database-specific implementation details.

Applications can use a supported database provider without rewriting their entire data-access layer.

Individual adapters may differ in supported operators, transactions, consistency guarantees, and performance characteristics.

### Multiple Storage Systems

Different applications and services can use different storage backends.

A deployment might combine:

- MongoDB for application documents
- PostgreSQL for relational workloads
- SQLite for local persistence
- DynamoDB for managed key-value access
- CoCreateDB for native document storage

CoCreateServer provides the application-level integration layer.

---

## CoCreateDB Integration

### Native Storage Within the Runtime

CoCreateDB is the storage-agnostic JavaScript database engine developed for the CoCreateJS ecosystem.

It provides an alternative to operating an independent database service for every application deployment.

CoCreateDB is designed around JSON documents, configurable storage backends, and first-class indexing.

### Storage Backends

The architecture targets storage environments such as:

- Local filesystems
- Attached storage
- Cloud object storage
- S3-compatible providers
- Distributed storage environments

### First-Class Indexing

CoCreateDB's indexing model organizes indexes by database, array, and key.

Indexes are segmented and maintain metadata used to narrow candidate sets and support ordered retrieval.

The indexing primitive is designed to remain independently accessible.

### Runtime Access

CoCreateDB integrates with CoCreateServer's runtime object.

This allows configured application services and authorized tools to access database operations and supported structural metadata.

Potential capabilities include:

- Querying objects
- Inspecting arrays
- Discovering indexed keys
- Examining index metadata
- Accessing storage configuration
- Diagnosing query behavior

### AI-Assisted Data Operations

Through authorized runtime tools, AI agents can work with CoCreateDB data and metadata.

For example, an agent could inspect application records, analyze index organization, or assist with identifying inefficient queries.

The same application-level approach can apply to external databases through supported adapters.

### Optional by Design

CoCreateDB is not required to use CoCreateServer.

Developers can choose the native database engine or continue using compatible external providers.

**Repository:** [CoCreateJS/db](https://github.com/CoCreateJS/db)

**Package:** `@cocreate/db`

---

## AI-Native Runtime and CoCreateMCP

### An Execution Environment for Intelligent Agents

CoCreateServer provides the operational foundation for AI-native applications.

Rather than limiting AI agents to generating code or recommending commands, CoCreateServer can expose application and infrastructure capabilities as executable tools.

CoCreateMCP connects compatible AI clients to these capabilities through the Model Context Protocol.

### From Intent to Execution

An AI agent can reason about an objective, discover available tools, and invoke authorized operations.

```text
                  AI Client / CoCreateAI
                           |
                           v
                     CoCreateMCP
                           |
                    Tool Discovery
                           |
                           v
                    Authorization
                           |
                           v
                     CoCreateServer
                           |
           +---------------+---------------+
           |               |               |
           v               v               v
       Application       Business        Infrastructure
          APIs          Workflows         Operations
           |               |               |
           +---------------+---------------+
                           |
                           v
                    Execution Result
```

### Shared Runtime Capabilities

CoCreateMCP can expose selected operations from the CoCreateServer environment.

These may include:

- Application data queries
- Customer and contact operations
- Business workflows
- File operations
- Scheduled jobs
- Runtime inspection
- Database metadata
- Deployment workflows
- Infrastructure configuration
- Monitoring and diagnostics

### External AI Clients

Compatible AI clients can connect to CoCreateMCP and interact with the tools made available by the server.

This enables developers to use existing AI interfaces while working with CoCreateServer's application capabilities.

### CoCreateAI

CoCreateAI is the AI pillar of the CoCreateJS ecosystem.

It provides declarative AI interfaces, model connectivity, and agentic application experiences.

CoCreateAI can use the runtime's exposed capabilities to coordinate workflows across applications, business data, and infrastructure.

A shared MCP-based tool architecture provides a path toward using the same capabilities from internal and external AI experiences.

### Model Independence

The runtime's application capabilities are independent of the AI model selected.

AI clients use structured tools, while CoCreateServer executes the corresponding operations.

This separation allows models, interfaces, and runtime implementations to evolve independently.

### Authorized Execution

AI access must be governed by application permissions and tool-level authorization.

Sensitive operations should support validation, auditing, execution limits, and human approval when appropriate.

**The AI reasons about the objective. CoCreateServer executes the capability.**

---

## Business Automation and Application Workflows

CoCreateServer is not limited to development and infrastructure operations.

It can provide the execution foundation for business applications and automated workflows.

### Business Applications

The CoCreateJS ecosystem includes application capabilities and modules for areas such as:

- Customers
- Contacts
- Organizations
- CRM
- Invoices
- Payments
- Messaging
- Notifications
- Files
- Application content
- Scheduled jobs
- External API integrations

These capabilities can be exposed through application interfaces, APIs, and authorized AI tools.

### Customer Communications

Consider a workflow that reviews incoming customer messages.

```text
New Messages
      |
      v
Read Customer Records
      |
      v
Evaluate Priority
      |
      v
Generate Draft Responses
      |
      v
Request Approval
      |
      v
Send Approved Messages
      |
      v
Update Application Records
```

CoCreateServer can coordinate the underlying data operations and configured communication APIs.

CoCreateAI can provide reasoning, prioritization, and response generation.

### Marketing Automation

Applications can connect supported marketing and communication APIs to scheduled workflows.

Examples include:

- Campaign preparation
- Content scheduling
- Social media publishing
- Email campaigns
- Lead follow-ups
- Reporting
- Performance analysis

### Financial Workflows

Applications can use connected payment and accounting services for supported operations involving:

- Invoices
- Payment records
- Transaction status
- Customer balances
- Financial reports
- Notifications

Financial operations should use appropriate authorization, verification, and audit controls.

### Scheduled Business Operations

CoCreateServer can coordinate recurring workflows through cron jobs and other configured scheduling mechanisms.

A scheduled workflow may query application data, invoke external APIs, update records, and notify users.

AI can participate when a workflow requires reasoning, classification, summarization, or content generation.

### One Runtime Across Departments

The same server environment can support sales, marketing, finance, customer service, development, and operations.

**Business automation and infrastructure automation share the same execution foundation.**

---

## Structured Execution with CoCreateAST

CoCreateAST provides structured execution capabilities within the CoCreateJS ecosystem.

It allows application behavior and workflows to be represented as data.

### Structured Operations

A workflow can describe a sequence of operations:

```text
Receive Request
      |
      v
Validate Identity
      |
      v
Resolve Variables
      |
      v
Query Data
      |
      v
Evaluate Conditions
      |
      v
Execute Actions
      |
      v
Return Results
```

### Reusable Workflows

Structured workflows can coordinate:

- Application APIs
- Database operations
- Conditional logic
- External integrations
- Notifications
- Background jobs
- Infrastructure operations

### AI Tool Integration

Workflows can provide defined operations that AI clients invoke through authorized tools.

This is preferable to giving agents unrestricted arbitrary-code execution for every task.

### Workflow Composition

Larger operations can coordinate smaller workflows.

For example, an application onboarding workflow might coordinate:

- Organization creation
- Application configuration
- Database initialization
- Security setup
- Infrastructure provisioning
- Deployment
- Verification

This creates a foundation for reusable, inspectable automation.

---

## Security and Key Management

Security is central to operating applications and exposing capabilities to AI agents.

### Application Security

CoCreateServer supports security patterns including:

- Authentication
- Organization and tenant isolation
- Role-based permissions
- Object-level access control
- Field-level permissions
- API authorization
- Secure network communication

### CoCreateKMS

CoCreateKMS provides key-management capabilities for the ecosystem.

Its architectural responsibilities include:

- Cryptographic key management
- Application secrets
- Service credentials
- Infrastructure credentials
- Encryption integration
- Key lifecycle operations

Specific guarantees depend on the implementation and deployment configuration.

### Infrastructure Credentials

Infrastructure automation often requires access to cloud provider APIs, DNS providers, storage systems, and deployment services.

Credentials should be managed through protected configuration and appropriately scoped permissions.

### AI Tool Security

AI-connected operations require explicit controls.

Recommended safeguards include:

- Authenticated tool access
- Scoped permissions
- Tool-level authorization
- Input validation
- Rate and resource limits
- Audit logging
- Human approval for consequential operations
- Restricted credential access

### Data Protection

Data access must respect application authorization regardless of whether an operation originates from a user interface, JavaScript API, workflow, or AI client.

The same security model should govern all supported interfaces.

---

## Infrastructure Orchestration

### Infrastructure as an Executable Capability

CoCreateServer is designed to coordinate infrastructure through application-level operations.

Rather than relying entirely on external deployment systems, configured runtime modules can manage parts of the application infrastructure lifecycle.

### Infrastructure Operations

Supported integrations may provide capabilities for:

- Provisioning servers
- Configuring cloud resources
- Installing runtime dependencies
- Deploying application code
- Managing workers
- Configuring storage
- Managing TLS
- Coordinating DNS
- Monitoring runtime health
- Scaling resources
- Replacing failed nodes
- Executing recovery workflows

### Multi-Cloud Environments

CoCreateServer's infrastructure architecture targets providers such as:

- AWS
- Google Cloud
- Microsoft Azure
- Oracle Cloud Infrastructure
- DigitalOcean
- Compatible self-managed environments

Provider-specific functionality depends on installed integrations and configured credentials.

### Application Deployment Lifecycle

```text
Application Definition
         |
         v
Runtime Configuration
         |
         v
Infrastructure Provisioning
         |
         v
Server Initialization
         |
         v
Application Deployment
         |
         v
Storage and Security Setup
         |
         v
Health Verification
         |
         v
Monitoring and Scaling
```

### AI-Assisted Orchestration

CoCreateMCP can expose authorized infrastructure workflows to compatible AI clients.

An agent may analyze an infrastructure requirement, propose a plan, execute approved operations, and inspect results.

This connects operational reasoning with runtime execution.

---

## Distributed Scaling and Geographic Routing

CoCreateServer is designed for distributed applications that operate across multiple nodes and regions.

### Horizontal Scaling

Applications can increase capacity by adding workers or runtime nodes.

### Vertical Scaling

Configured infrastructure integrations may support changing resource allocations for individual nodes.

### Geographic Distribution

Applications can place workloads closer to users and services.

Geographic routing strategies may consider:

- User location
- Network latency
- Regional traffic density
- Available capacity
- Infrastructure health
- Service availability

### GeoDNS and Edge Routing

The infrastructure architecture includes geographically aware DNS and edge-routing strategies.

These can help direct users toward suitable application regions and provide failover paths.

### Distributed Workload Execution

Workloads may be assigned across workers, nodes, and regions according to runtime configuration and coordination capabilities.

### AI-Assisted Scaling Decisions

An AI agent could examine telemetry and evaluate whether to:

- Add workers
- Provision a new node
- Expand an existing cluster
- Create a new regional cluster
- Relocate workloads
- Adjust capacity
- Change routing configuration

With the appropriate tools and permissions, approved changes could be executed through CoCreateServer.

### Scale According to Demand

The architectural objective is to allocate resources according to application demand rather than maintaining unnecessary infrastructure.

Scaling policies should account for capacity, cost, availability, latency, and workload requirements.

---

## Real-Time Communication and Synchronization

CoCreateServer provides the server-side foundation for connected applications.

### WebSocket Communication

Persistent connections support low-latency application interactions.

### Real-Time Events

Applications can use configured modules to distribute events and updates between connected clients and services.

### Subscriptions

Supported data modules can notify clients when relevant application state changes.

### Collaborative Applications

CoCreateJS includes capabilities for collaborative editing and synchronized application state.

### Distributed Messaging

Server nodes can communicate through mesh and messaging mechanisms.

### Offline Synchronization

CoCreateClient can store application data locally through IndexedDB.

When connectivity returns, configured synchronization mechanisms can exchange changes with CoCreateServer.

### Data Consistency

Distributed synchronization requires explicit consistency and conflict-resolution strategies.

Different workloads may use different guarantees, including eventual consistency where appropriate.

---

## Modularity and Extensibility

CoCreateServer is designed to be extended through JavaScript modules.

### Load Capabilities Independently

```javascript
await import('@cocreate/users');
await import('@cocreate/organizations');
await import('@cocreate/notification');
```

### Process-Specific Execution

Modules can be assigned to primary or worker processes according to their responsibilities.

### Custom Routes

```javascript
server.routes.set('/api/custom', async (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify({
    message: 'Hello from CoCreateServer'
  }));
});
```

### Storage Adapters

Developers can integrate compatible database and storage systems through adapter interfaces.

### Custom Workflows

Applications can define reusable operations through supported workflow mechanisms.

### MCP Tools

Supported server capabilities can be exposed through structured MCP tools for authorized AI clients.

### Infrastructure Integrations

Additional providers and services can be connected through modular integrations.

**Extend the runtime without rebuilding the application architecture.**

---

## Self-Contained Application Infrastructure

### Reducing External Dependencies

CoCreateServer is designed to bring common application infrastructure capabilities into one coordinated runtime environment.

A deployment may combine:

- Application execution
- HTTP and WebSockets
- Database access
- Native storage
- Authentication
- Key management
- Background jobs
- Workflow execution
- Distributed coordination
- Monitoring
- Infrastructure automation
- AI tool access

### Native Capabilities, Optional Integrations

CoCreateServer can use integrated components where appropriate while preserving compatibility with external services.

For example:

- Use CoCreateDB or an external database.
- Use built-in runtime networking or integrate with existing infrastructure.
- Use supported key-management capabilities or external services.
- Use CoCreateAI or compatible external AI clients.
- Use native workflows or connect existing automation systems.

### Application Ownership

The architectural objective is to give developers greater control over the systems required to operate their applications.

Self-contained infrastructure does not imply that every deployment must run every capability locally.

It means applications can choose which responsibilities to manage directly and which to delegate to external providers.

---

## Architecture Overview

### CoCreateServer as the Operational Foundation

```text
                         CoCreateJS
                             |
            +----------------+----------------+
            |                                 |
            v                                 v
      CoCreateClient                      CoCreateAI
            |                                 |
       Applications                      Intelligence
       Declarative UI                    Agentic Workflows
       Real-Time                         Business Automation
            |                                 |
            +----------------+----------------+
                             |
                             v
                       CoCreateMCP
                             |
                    Authorized AI Tools
                             |
                             v
                       CoCreateServer
                             |
           +-----------------+-----------------+
           |                 |                 |
           v                 v                 v
       Networking          Execution          Data
           |                 |                 |
       HTTP / HTTPS       Primary / Worker   CRUD
       WebSockets         Jobs / Workflows   Adapters
       Routing            Cluster / Mesh     CoCreateDB
           |                 |                 |
           +-----------------+-----------------+
                             |
                             v
                      Runtime Services
                             |
           +-----------------+-----------------+
           |                 |                 |
           v                 v                 v
        Security         Infrastructure      Automation
           |                 |                 |
        CoCreateKMS       Cloud / DNS       CoCreateAST
        Permissions       Deployments       Scheduled Jobs
        Credentials       Scaling           Business APIs
           |                 |                 |
           +-----------------+-----------------+
                             |
                             v
                   Distributed Applications
```

This is a conceptual architecture rather than a strict dependency diagram.

CoCreateServer can operate independently of CoCreateClient and CoCreateAI.

CoCreateMCP exposes selected server capabilities to compatible AI clients.

Supporting modules are loaded according to application requirements.

---

## Use Cases

### Application Hosting

Run websites, APIs, backend services, and custom JavaScript applications.

### SaaS Platforms

Operate multi-tenant applications with data, permissions, networking, and distributed services.

### CRM and Business Applications

Support customer records, contacts, organizations, invoices, payments, and business workflows.

### AI-Powered Business Automation

Connect intelligent agents to application data and tools for customer support, marketing, finance, and operational workflows.

### Real-Time Applications

Build messaging, collaboration, dashboards, and synchronized application experiences.

### API Integration Platforms

Connect third-party services through reusable application APIs and workflows.

### Distributed Worker Systems

Execute workloads across processes, nodes, and regions.

### Multi-Cloud Infrastructure

Coordinate application deployments across compatible cloud providers.

### AI-Assisted Infrastructure Management

Expose authorized tools for monitoring, provisioning, deployment, scaling, and diagnostics.

### Native Data Infrastructure

Use CoCreateDB for integrated document persistence and indexing.

### Existing Application Modernization

Add networking, data operations, workflows, AI tools, or distributed infrastructure capabilities without replacing the entire application stack.

### Self-Hosted Platforms

Operate applications using integrated runtime services where supported.

---

## Design Philosophy

### 1. One Runtime

Provide a consistent execution environment for applications, services, workflows, and infrastructure operations.

### 2. JavaScript First

Use JavaScript modules, objects, promises, events, and familiar platform primitives.

### 3. Modular by Default

Load only the capabilities required by each application and process.

### 4. Database Independence

Support multiple storage providers through consistent application interfaces.

### 5. Infrastructure Independence

Allow applications to operate across compatible cloud providers and deployment environments.

### 6. Distributed by Design

Support multiple nodes, workers, regions, and coordinated workloads.

### 7. AI-Native Execution

Make authorized application and infrastructure capabilities accessible to compatible intelligent agents.

### 8. Business and Infrastructure Together

Support customer operations, application workflows, and infrastructure automation through the same runtime.

### 9. Security Throughout the Lifecycle

Apply permissions and operational controls across users, APIs, workflows, AI tools, and infrastructure.

### 10. Primitives Over Unnecessary Abstractions

Expose reusable capabilities directly rather than introducing avoidable layers.

### 11. Progressive Adoption

Allow developers to adopt individual capabilities without replacing their existing applications.

### 12. Build Applications, Not Infrastructure

Reduce the complexity required to deploy, operate, and scale useful applications.

---

## CoCreateJS Ecosystem

CoCreateServer is one of the three primary pillars of CoCreateJS.

| Pillar | Tagline | Purpose |
|---|---|---|
| **CoCreateClient** | One code. Build anything. Run anywhere. | Build and interact |
| **CoCreateServer** | One runtime. Any app. Every cloud. | Execute and operate |
| **CoCreateAI** | One intelligence. Any role. Every task. | Understand and orchestrate |

### Supporting Technologies

| Component | Purpose |
|---|---|
| **CoCreateDB** | Native data persistence and indexing |
| **CoCreateMCP** | AI-accessible runtime tools |
| **CoCreateAST** | Structured workflow execution |
| **CoCreateKMS** | Key and secret management |
| **CoCreateCluster** | Distributed coordination |
| **CoCreateCLI** | Development and operational commands |
| **CoCreateDevice** | Device and cross-platform integration |

These components can operate independently or as part of the broader CoCreateJS ecosystem.

---

## Contributing

CoCreateServer is part of the open-source CoCreateJS ecosystem.

Contributions are welcome in areas including:

- Runtime performance
- Networking
- WebSocket communication
- Database adapters
- Storage integrations
- Distributed coordination
- Worker management
- Infrastructure providers
- Security
- AI tool integration
- MCP capabilities
- Workflow execution
- Documentation
- Tests and examples

Before contributing, review the repository's existing issues, documentation, and contribution guidelines.

We encourage implementations that preserve modularity, JavaScript-first development, consistent APIs, and infrastructure independence.

---

## License

CoCreateServer is distributed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.

Review the repository's license file for the applicable terms and notices.

### Commercial Licensing and Enterprise Support

For commercial licensing, enterprise support, integrations, or deployment inquiries:

**Email:** [info@cocreatejs.com](mailto:info@cocreatejs.com)

**Website:** https://cocreatejs.com

---

## Resources

- **CoCreateJS:** https://github.com/CoCreateJS/CoCreateJS
- **CoCreateServer:** https://github.com/CoCreateJS/server
- **CoCreateClient:** https://github.com/CoCreateJS/Client
- **CoCreateDB:** https://github.com/CoCreateJS/db
- **GitHub Organization:** https://github.com/CoCreateJS
- **Website:** https://cocreatejs.com
- **Documentation:** https://cocreatejs.com/docs
- **Contact:** [info@cocreatejs.com](mailto:info@cocreatejs.com)

---

## CoCreateServer

### One runtime. Any app. Every cloud.

From application APIs and business workflows to distributed infrastructure and AI-driven operations, CoCreateServer provides the execution foundation that connects them.

Run applications. Connect data. Execute workflows. Coordinate infrastructure. Empower intelligent agents.

**One runtime for applications, business operations, and infrastructure.**

Part of **CoCreateJS**.

Developed by **CoCreate**.
