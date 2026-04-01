# Architecture

## System Overview

BBM sits between traders/protocols and Solana validators, intercepting the standard RPC submission path and replacing it with a faster, smarter bundle routing layer.

```
┌─────────────┐     ┌──────────────────────┐     ┌──────────────────┐
│  Trader /   │────▶│     BBM Relay        │────▶│ Validator Node   │
│  Protocol   │     │  ┌────────────────┐  │     │ (Banking Stage)  │
└─────────────┘     │  │ Pre-Simulation │  │     └──────────────────┘
                    │  └───────┬────────┘  │
                    │  ┌───────▼────────┐  │
                    │  │   Conflict     │  │
                    │  │   Resolver     │  │
                    │  └───────┬────────┘  │
                    │  ┌───────▼────────┐  │
                    │  │  Bundle        │  │
                    │  │  Optimizer     │  │
                    │  └────────────────┘  │
                    └──────────────────────┘
```

## Components

### BBM Relay
Node.js service that receives transaction bundles from traders, runs pre-simulation, resolves conflicts, and forwards optimized bundles directly to validators.

### Pre-Simulation Engine
Simulates transaction execution before submission using a local Solana runtime snapshot, catching failures before they reach the validator.

### Conflict Resolver
Detects and resolves account write conflicts within a bundle, reordering or splitting transactions to maximize throughput.

### Bundle Optimizer
Packs transactions into optimally-sized bundles, maximizing compute unit utilization and minimizing latency.

### Geyser Plugin
Real-time monitoring of block state, feeding data back into the pre-simulation engine for accurate conflict detection.

## Latency Comparison

| Path | Latency |
|------|---------|
| Standard RPC → TPU → Banking Stage | 300–500 ms |
| BBM Direct Submission | 50–100 ms |
