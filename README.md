## General
 A simple "Find Waldo" decentralized application (DApp) utilizing ZoKrates and the Optimism Sepolia network, enabling users to locate Waldo and maintain a public list of successful finders. Use ZoKrates to submit the proof that you found Waldo to the smart contract. 

## How to build
```bash
cd integration
yarn install
# Build ZoKrates artifacts and place them in the artifacts folder
yarn build 
# Compile the smart contract from the contract folder
yarn compile 
# Deploy the smart contract from the contract folder to the Optimism Sepolia network using the provided seed phrase
yarn deploy "seed phrase"
```
## How to run

Switch your MetaMask to the OP-Sepolia network.
```bash
docker build -t waldo .
docker run -d -p 8080:80 waldo
```
Visit http://localhost:8080/ and click on Waldo once you locate him.
