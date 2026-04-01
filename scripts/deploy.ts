import * as anchor from "@coral-xyz/anchor";

async function deploy() {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  console.log("Deploying BBM to:", provider.connection.rpcEndpoint);
  console.log("Wallet:", provider.wallet.publicKey.toBase58());

  // TODO: add deploy logic
}

deploy().catch(console.error);
