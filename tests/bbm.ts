import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { assert } from "chai";

describe("bbm", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  it("submits a bundle successfully", async () => {
    // TODO: implement test
    assert.ok(true);
  });

  it("resolves conflicts between transactions", async () => {
    // TODO: implement test
    assert.ok(true);
  });
});
