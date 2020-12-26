const fs = require('fs');
const chalk = require('chalk');
// const path = require('path');

const flags = (flag) =>{
    let getFlagIndex = process.argv.indexOf(flag);
    return (getFlagIndex === -1) ? null : process.argv[getFlagIndex + 1];
}

var file = flags("-f");
var permission = flags("-p");

// console.log(file);
// console.log(permission);


if (!file || !permission){
    // console.log(chalk.yellow(`Please Use ${chalk.red("-f")} for your filename and ${chalk.red("-p")} for permission`));
    console.log(`
      Useage => node chmode.js ${chalk.green("-f <Filename>")} ${chalk.red("-p <permission>")}

      ${chalk.red("Permissions")} = {

        ${chalk.yellow("wo")} = Only Owner Can Write
        ${chalk.yellow("ro")} = Only Owner Can Read
        ${chalk.yellow("eo")} = Only Owner Cna Execute
        ${chalk.yellow("rg")} = Only Groups Can Read
        ${chalk.yellow("wg")} = Only Group Can Write 
        ${chalk.yellow("eg")} = Only Groups Can Execute
        ${chalk.yellow("r")} = Only Other Can Read
        ${chalk.yellow("w")} = Only Other Can Write
        ${chalk.yellow("e")} = Only Other Can Execute
        ${chalk.yellow("restart")} = Restart To Default
        ${chalk.yellow("noperm")} = Nobody Can Do Anything
      }
      `)
}else if(permission === "wo") {     // Only Owner can write
    fs.chmod(`${file}`, 0o200, (err) => {
        if(err) throw err;
        console.log(`The permissions for file ${chalk.green(file)} have been changed ${chalk.red("Owner Write")} !`);
    });
}else if(permission === "ro") {     // Only Owner can read
    fs.chmod(`${file}`, 0o400, (err) => {
        if(err) throw err;
        console.log(`The permissions for file ${chalk.green(file)} have been changed ${chalk.red("Owner Read")}!`);
    });
}else if(permission === "eo") {     // Only Owner can read
    fs.chmod(`${file}`, 0o100, (err) => {
        if(err) throw err;
        console.log(`The permissions for file ${chalk.green(file)} have been changed ${chalk.red("Owner Execute ")}!`);
    });
}else if(permission === "rweo") {     // Only Owner can read
    fs.chmod(`${file}`, 0o765 , (err) => {
        if(err) throw err;
        console.log(`The permissions for file ${chalk.green(file)} have been changed ${chalk.red("Read Write Execute Owner")}!`);
    });
}else if(permission === "rg") {     // No one can Write
    fs.chmod(`${file}`, 0o40, (err) => {
        if(err) throw err;
        console.log(`The permissions for file ${chalk.green(file)} have been changed ${chalk.red("Group Read")} !`);
    });
}else if(permission === "wg") {     // Everyone can Write
    fs.chmod(`${file}`, 0o20, (err) => {
        if(err) throw err;
        console.log(`The permissions for file ${chalk.green(file)} have been changed ${chalk.red("Group Write")}!`);
    });
}else if(permission === "eg") {     // Everyone can Write Execute
    fs.chmod(`${file}`, 0o10, (err) => {
        if(err) throw err;
        console.log(`The permissions for file ${chalk.green(file)} have been changed ${chalk.red("Group Execute")} !`);
    });
}else if(permission === "r") {     // Everyone can Read Execute
    fs.chmod(`${file}`, 0o4, (err) => {
        if(err) throw err;
        console.log(`The permissions for file ${chalk.green(file)} have been changed ${chalk.red("Read Everyone")} !`);
    });
}else if(permission === "w") {     // Everyone can Read Write
    fs.chmod(`${file}`, 0o2, (err) => {
        if(err) throw err;
        console.log(`The permissions for file ${chalk.green(file)} have been changed ${chalk.red("Everyone write")} !`);
    });
}else if(permission === "e") {     // Everyone can Read Write Execute
    fs.chmod(`${file}`, 0o1, (err) => {
        if(err) throw err;
        console.log(`The permissions for file ${chalk.green(file)} have been changed ${chalk.red("Everyone Execute")} !`);
    });
}else if(permission === "restart") {     // Everyone can Read Write Execute
    fs.chmod(`${file}`, 0o765, (err) => {
        if(err) throw err;
        console.log(`The permissions for file ${chalk.green(file)} have been changed ${chalk.red("Restart to Default")} !`);
    });
}
else if(permission === "noperm") {     // Everyone can Read Write Execute
    fs.chmod(`${file}`, 0, (err) => {
        if(err) throw err;
        console.log(`The permissions for file ${chalk.green(file)} have been changed ${chalk.red("No Permission")} !`);
    });
}else{
    console.log("Something went wrong :(");
}
