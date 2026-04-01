# API Reference

## BBM Relay Endpoints

### Submit Bundle
```
POST /bundle
```
Submit a bundle of transactions for pre-simulation and optimized forwarding.

**Request:**
```json
{
  "transactions": ["base64_tx_1", "base64_tx_2"],
  "options": {
    "conditional": false,
    "atomic": true,
    "priority_fee": 1000
  }
}
```

**Response:**
```json
{
  "bundle_id": "abc123",
  "status": "accepted",
  "estimated_slot": 312847291
}
```

### Get Bundle Status
```
GET /bundle/:bundle_id
```

**Response:**
```json
{
  "bundle_id": "abc123",
  "status": "confirmed",
  "slot": 312847293,
  "latency_ms": 87
}
```

### Health Check
```
GET /health
```
Returns relay node status and current slot.

## TypeScript SDK

```typescript
import { BBMClient } from '@bbm/sdk';

const client = new BBMClient({
  rpcUrl: process.env.SOLANA_RPC_URL,
  relayUrl: 'http://localhost:8080',
});

const result = await client.submitBundle({
  transactions: [tx1, tx2],
  options: { atomic: true },
});
```
