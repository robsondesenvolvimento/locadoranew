const crypto = require("crypto");

const cryptoService = () => {

    const cryptoServiceControllers = {};    

      // cryptoServiceControllers.generateKey = () => {
      //   const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
      //       // The standard secure default length for RSA keys is 2048 bits
      //       modulusLength: 4096,
      //     });
    
      //     const data = process.env.SECRET;
    
      //     const encryptedData = crypto.publicEncrypt(
      //       {
      //         key: publicKey,
      //         padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      //         oaepHash: "sha512",
      //       },
      //       // We convert the data string to a buffer using `Buffer.from`
      //       Buffer.from(data)
      //     );
      // }

      // cryptoServiceControllers.base64 = () => {
      //   return encryptedData.toString("base64");
      // }

      return cryptoServiceControllers;
}

module.exports = cryptoService;