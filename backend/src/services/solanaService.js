import { Connection } from '@solana/web3.js';

const connection = new Connection(process.env.SOLANA_RPC);

export async function sendTransaction(data) {
  console.log('Sending transaction to Solana...', data);

  return {
    signature: '5F8hExampleTxSignature'
  };
}
