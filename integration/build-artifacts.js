const fs = require('fs');
(async () => {
    const { initialize } = await import('zokrates-js');

    initialize().then((zokratesProvider) => {
        const source = `
            def main(private field x, private field y, private field puser, field user) {
                assert(x >= 607); 
                assert(x <= 628);
                assert(y >= 284);
                assert(y <= 318);
                assert(puser == user);
                return;
            }
        `;
      
        // compilation
        const artifacts = zokratesProvider.compile(source);
        //save artifacts object to file
        const jsonString = JSON.stringify(artifacts);
        const filePath = '../artifacts/artifacts.json';
        fs.writeFileSync(filePath, jsonString, 'utf8');

        // run setup
        const keypair = zokratesProvider.setup(artifacts.program);

        // Save prover key to file
        const pkBuffer = Buffer.from(keypair.pk);
        const pkFilePath = '../artifacts/pk.bin';
        fs.writeFileSync(pkFilePath, pkBuffer);
      
        // export solidity verifier
        const verifier = zokratesProvider.exportSolidityVerifier(keypair.vk);
        // Save solidity verifier to file
        const verifierFilePath = '../artifacts/Verifier.sol';
        fs.writeFileSync(verifierFilePath, verifier, 'utf8');
      });
  })();

