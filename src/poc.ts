import { sortitionModuleConfig } from "./abi";
import viem, { Address } from "viem";
import { arbitrumSepolia } from "viem/chains";

const client = viem.createPublicClient({
  chain: arbitrumSepolia,
  transport: viem.http(),
});

const contract = viem.getContract({
  abi: sortitionModuleConfig.abi,
  address: sortitionModuleConfig.address[421614],
  client,
});

const address: Address = "0x000000000000000000000000000000000000000";
const court = 1n;

contract.read.stakeOf([address, court]);
