# Product

## What is BBM?

Block Building Mechanism (BBM) is a decentralized block building protocol for Solana that solves four core problems: latency, block inefficiency, limited transaction logic, and MEV.

## Target Users

- **DeFi protocols** — arbitrage bots, liquidators, market makers needing sub-100ms execution
- **App developers** — protocols that want control over transaction ordering
- **Validators** — earn more fees through optimized block assembly

## Core Value Propositions

1. **5x faster execution** — 50–100 ms vs 300–500 ms standard path
2. **No MEV** — apps define their own auction logic and fair ordering
3. **Higher block utilization** — parallel processing fills blocks to 95%+
4. **Conditional bundles** — execute only if conditions are met on-chain

## How It Differs from Jito

| Feature | Jito | BBM |
|---------|------|-----|
| MEV extraction | Enabled | Eliminated |
| Auction logic | Validator-controlled | App-controlled |
| Conditional execution | No | Yes |
| Bundle privacy | No | Yes (concealed content) |
| Latency | ~200 ms | 50–100 ms |
