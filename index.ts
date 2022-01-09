import { clusterApiUrl, Connection } from "@solana/web3.js";

const web3 = require("@solana/web3.js");

//TODO when main : change to mainnet (or better yet, shadow RPC)
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
