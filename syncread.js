/*
Code to read from an already created file
 */
const fs = require('fs')
const dataReader =(error, content) =>{
    //This if statement means that if there's error in the code, it should display the error message in the console
    if (error){
        console.log("Error reading file content:", error)
    }
    //This will display the content of the file
    else {
        console.log("These are the list of countries in the countryList.txt file: \n" + content)
    }
}
fs.readFile('countryList.txt', dataReader);