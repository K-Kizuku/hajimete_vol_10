use anchor_lang::prelude::*;

declare_id!("");

#[program]
pub mod solana_rust {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
