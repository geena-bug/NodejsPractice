/*
Code to read from the province list file
 */
// Import the file system package inclusive of promises in place of callback
const fs = require('fs').promises
// Create an asynchronous function to read the province list
async function readProvinceList() {
    //try catch block to capture any error while reading through the content of the file
    try {
        // read through the file using promises and await
        const content= await fs.readFile('provinceList.txt', 'utf8');
        console.log('These are the contents of the province list file: \n', content);
        return 'Contents of province list file displayed successfully! \n \x1b[1m I DID IT HURRAY!!!!!!\x1b[0m'
    } catch (error) {
        console.log(error);
    }
}
// Execute the code
readProvinceList().then(r => console.log(r));
