import { ethers } from "ethers";
import { erc721 } from "./abit";
import { MintParams } from "./interfaces";

const mintNft = async (mintParams:MintParams) => {

    const { to, providerUrl, privateKey,contractAddress } = mintParams;

    const provider = new ethers.providers.JsonRpcProvider(providerUrl);
    
      const wallet = new ethers.Wallet(privateKey,provider);
    
      const contract = new ethers.Contract(contractAddress, erc721, wallet);
    
      const transaction = await contract.safeMint(to);
    
      await transaction.wait(1);
    
      return transaction;
}   

  
mintNft({
    to: "0xff954c6F305f6C7126060C79e6480D1B94A1C3b6",
    providerUrl: "https://rpc.ankr.com/polygon_mumbai",
    contractAddress: "0x6bf2a79f432f85405a8ec5f313d1f5c06cc49306",
    privateKey:"d001b5274f542cfc29564211297ab391f85ed41f06b20785d10d372dad1c87ce"
}).then(console.log).catch(console.log);
