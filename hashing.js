const sha256 = require('crypto-js/sha256');
/**
 * My cryptographic hash using SHA256 algorithm
 */

const data1 = "ABDUL ASHKAR";
const dataObject = {
	id: 1,
  	body: "With Object Works too",
  	time: new Date().getTime().toString().slice(0,-3)
};

function generateHash(obj) {

  return sha256(JSON.stringify(obj));
}

console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);