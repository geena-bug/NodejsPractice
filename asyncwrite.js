/*
code to write to a file synchronously
 */
//Import the file system package inclusive of promises in place of callback
const fs = require('fs').promises
//create an asynchronous function to take province list
async function provinceList(){
    const provinceList = ['Saskatchewan', 'Alberta', 'Quebec', 'Ontario', 'British Colombia', 'Nunavut', 'Nova Scotia', 'New Brunswick']
    let content = ""
    //loop through the list
    for(let i=0; i <provinceList.length; i++){
        content += provinceList[i] + "\n"
    }
    //try catch block to catch te error while writing to the file
    try{
      await fs.writeFile('provinceList.txt', content)
        console.log ('This file contains the list of provinces in Canada:\n', content);
      return 'Completed Successfully!!'
    }catch (error){
        console.log(error);
    }
}
//This line will execute the code
provinceList().then(r => console.log(r));