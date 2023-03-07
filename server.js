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
  
  const askNewEmployee = [
    "What is the first name?",
    "What is the last name?",
    "What is their role?",
    "Who is their manager?",
  ];

  const roleQuery =
  'SELECT * FROM roles; SELECT CONCAT (e.first_name," ",e.last_name) AS full_name FROM employee e';


const allStaff = `SELECT e.id, e.first_name AS "First Name", e.last_name AS "Last Name", r.title, d.name AS "Department", IFNULL(r.salary, 'No Data') AS "Salary", CONCAT(m.first_name," ",m.last_name) AS "Manager"
FROM employee e
LEFT JOIN roles r 
ON r.id = e.role_id 
LEFT JOIN department d 
ON d.did = r.department_id
LEFT JOIN employee m ON m.id = e.manager_id
ORDER BY e.id;`;

const managerQuery = `SELECT CONCAT (e.first_name," ",e.last_name) AS full_name,r.title, d.name FROM employee e INNER JOIN roles r ON r.id = e.role_id INNER JOIN department d ON d.did =r.department_id WHERE name = "Management";`


