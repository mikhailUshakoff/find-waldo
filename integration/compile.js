const fs = require('fs');
const solc = require('solc');

const source = fs.readFileSync('../contract/Verifier.sol', 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'Verifier.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
module.exports = output.contracts['Verifier.sol'].Verifier;