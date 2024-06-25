##General

Use ZoKrates to submit the proof that you found Waldo to the smart contract.

##How to run

Switch your MetaMask to the OP-Sepolia network.
```bash
docker build -t waldo .
docker run -d -p 8080:80 waldo
```
Visit http://localhost:8080/ and click on Waldo once you locate him.