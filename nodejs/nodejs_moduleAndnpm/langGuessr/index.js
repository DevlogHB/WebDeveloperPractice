const franc = require("franc"); 
const langs = require("langs");
const colors = require("colors");
const input = process.argv[2];

console.log(process.argv);
const langCode = franc(input);

console.log(langCode);
if(langCode === 'und'){
    console.log("Sorry not found".red)
} else{
const language = langs.where("3", langCode);
console.log(`Our best guess is : ${language.name}`.green);
}
