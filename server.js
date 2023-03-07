const chalk = require("chalk");
const mysql = require("mysql");
const inquirer = require("inquirer");
const figlet = require("figlet");

const connection = mysql.createConnection({
    host: "localhost",
  
    
    port: 3306,
  
    user: "root",
  
    password: "password",
    database: "employeeDB",
    multipleStatements: true,
  });

  connection.connect((err) => {
    if (err) throw err;
  
    console.table(chalk.yellow("\n WELCOME TO EMPLOYEE TRACKER \n"));
  
    console.table(
      chalk.yellow.bold(
        `====================================================================================`
      )
    );
    console.log(``);
    console.table(chalk.greenBright.bold(figlet.textSync("Employee Tracker")));
    console.log(``);
    console.log(``);
    console.table(
      chalk.yellow.bold(
        `====================================================================================`
      )
    );
    
    badCompany();
  });
  