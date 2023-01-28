import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolanaRust } from "../target/types/solana_rust";

describe("solana_rust", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolanaRust as Program<SolanaRust>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
