# BBM — Block Building Mechanism

[![CI](https://github.com/Marakaya/colosseum_example/actions/workflows/ci.yml/badge.svg)](https://github.com/Marakaya/colosseum_example/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-14F195.svg)](LICENSE)
[![Solana](https://img.shields.io/badge/Solana-devnet-9945FF)](https://solana.com)
[![Hackathon](https://img.shields.io/badge/Colosseum-2026-14F195)](https://colosseum.org)

> Decentralized block building protocol for Solana — reduces transaction latency from 300–500 ms to **50–100 ms** and eliminates MEV through app-controlled execution order.

[Live Demo](#) · [Video Walkthrough](#) · [Docs](docs/) · [Colosseum Submission](#)

---

![BBM Dashboard](assets/project.jpg)

---

## Submission to 2026 Solana National Hackathon

| Name | Role | Contact |
|------|------|---------|
| Maxim Afanasyev | Founder & Lead Engineer | [Telegram](https://t.me/maxnutrition) · [X](https://x.com/_Marakaya) |

---

## Problem and Solution

### 1. High Latency
- **Problem:** RPC → TPU → Banking Stage causes 300–500 ms delay, resulting in missed arbitrage and failed liquidations.
- **BBM:** Direct Trader → BBM with pre-simulation cuts latency to **50–100 ms**.

### 2. Inefficient Block Assembly
- **Problem:** Validators fill blocks only 70–80%, wasting compute units on conflicting transactions.
- **BBM:** Parallel processing, conflict resolution, and optimized bundles push utilization above 95%.

### 3. Limited Transaction Logic
- **Problem:** Solana lacks native conditional execution and bundle privacy.
- **BBM:** Adds conditional and atomic bundles with concealed content.

### 4. App-Controlled Execution
- **Problem:** Validators dictate transaction order, enabling MEV extraction at users' expense.
- **BBM:** Lets apps define their own auction logic and enforce fair ordering.

---

## Why Solana

- **Speed** — 400 ms block time is the foundation for our 50–100 ms latency target; no other L1 makes this feasible
- **Cost** — $0.00025 per transaction makes high-frequency bundle submission economically viable
- **Ecosystem** — Deep DeFi liquidity on Jupiter, Raydium, and Orca creates real, immediate demand for better block building
- **Composability** — Anchor's CPI allows BBM to integrate with any existing Solana protocol without forks or migrations

---

## Summary of Features

- Direct trader → BBM submission (bypasses standard RPC path)
- Pre-simulation engine with conflict detection
- Parallel transaction processing and bundle optimization
- Conditional and atomic bundle support
- App-defined auction logic
- Fair ordering mechanism
- Geyser plugin for real-time block state monitoring

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| On-chain programs | Rust · Anchor Framework |
| SDK / Client | TypeScript · @solana/web3.js |
| Frontend | React · Next.js · TailwindCSS |
| Backend / Relay | Node.js · Fastify |
| Monitoring | Geyser Plugin · Prometheus |
| Testing | Anchor Tests · Bankrun |

---

## Architecture

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
                    │  │    Bundle      │  │
                    │  │   Optimizer    │  │
                    │  └────────────────┘  │
                    └──────────────────────┘
```

See [docs/architecture.md](docs/architecture.md) for full component breakdown.

---

## Quick Start

**Prerequisites:** Node.js 18+, Rust, Anchor CLI, Solana CLI

```bash
# Clone the repository
git clone https://github.com/Marakaya/colosseum_example
cd colosseum_example

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Build Solana programs
anchor build

# Run tests
anchor test

# Start frontend
cd frontend && npm run dev
```

---

## Roadmap

- [x] Core bundle submission protocol
- [x] Pre-simulation engine
- [x] Conflict resolution
- [ ] Mainnet deployment
- [ ] App-defined auction logic SDK
- [ ] Multi-validator support
- [ ] Privacy layer (ZK bundles)

Full roadmap: [docs/roadmap.md](docs/roadmap.md)

---

## Resources

- [Project Presentation](#)
- [Video Demo](#)
- [Live Application](#)
- [X / Twitter](https://x.com/_Marakaya)

---

## License

MIT — see [LICENSE](LICENSE)
