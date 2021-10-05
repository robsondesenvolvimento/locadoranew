const crypto = require('crypto');
const fs = require('fs');

const PASSPHRASE = 'I had learned that some things are best kept secret.';

const KEY_PAIR_OPTIONS = {

    modulusLength: 4096,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: PASSPHRASE
    }

};

const KEY_PAIR = crypto.generateKeyPairSync('rsa', KEY_PAIR_OPTIONS);

const RSA_PRK = KEY_PAIR.privateKey;
const RSA_PUK = KEY_PAIR.publicKey;

const encMsg = Buffer.from(RSA_PRK).toString('base64');
if (!fs.existsSync('locadora_rsa.key'))
    fs.writeFileSync('locadora_rsa.key', encMsg);