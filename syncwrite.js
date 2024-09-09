/*
Code to create and write to a file list of countries
 */
const fs = require('fs') //This line of code will import the file system package and is required at the beginning of every nodeJs code
const countryList = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Bolivia', 'Bosnia', 'Cameroon', 'Canada']
//Create a loop to iterate through the list of countries
let content = "";
for(let i=0; i < countryList.length; i++) {
    content += countryList[i] + "\n"
}
    console.log(content);
//Create a function to care of the expected error
function errorHandler(error){
    console.log(error);
}
//Write into the file the content as displayed above
fs.writeFile ('countrylist.txt' , content, (error) =>{
    if (error) {
        errorHandler(error);
    } else {
        console.log('File saved successfully!');
    }
})