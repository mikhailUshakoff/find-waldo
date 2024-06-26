const { ethers } = require('ethers');
const { abi, evm } = require('./compile');

const secretSeedPhrase = process.argv[2];

async function main() {
    // deploy
    const provider = new ethers.JsonRpcProvider('https://sepolia.optimism.io', 11155420);
    console.log('Block #', await provider.getBlockNumber());

    // get wallet
    const wallet = ethers.Wallet.fromPhrase(secretSeedPhrase);
    const account = wallet.connect(provider);
    console.log('Wallet address:', await account.getAddress());

    // deploy verifier   
    const factory = new ethers.ContractFactory(abi, evm.bytecode.object, account);
    const verifier = await factory.deploy();
    console.log('Verifier deployed to:', await verifier.getAddress());

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });