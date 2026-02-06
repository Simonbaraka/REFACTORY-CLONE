//console.log(sale);

//FILE AND SYSTEM INTERACTION

//file system (fs)allows access to the server storage
/**
 * Method when working with fs
 * ReadFile
 * WriteFile
 * AppendFile adds data to an existing file
 * Unlink deletes a file
 */

//ReadFile method
const fs = require("fs");
const path = require("path");
const os = require("os");

fs.readFile("app.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

fs.readFile("Deploy.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let deploy = JSON.parse(data);
    //console.log(deploy);

    const SERVERHOST = deploy.server.host;
    const SERVERPORT = deploy.server.port;
  }
});

//WRITING TO A FILE
let errorlog = "Error: user tried to log in multiple times \n append";

fs.writeFile("errorlog.txt", errorlog, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully written");
  }
});

//appendFile adds content to an extisting file
fs.appendFile("errorlog.txt", errorlog, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully written");
  }
});

//unlink used to delete files
fs.unlink("errorlog.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully  deleted file");
  }
});

//helps locate your file without having to write the whole path
let errorlist = path.join(__dirname, "Deployy.txt");
console.log(errorlist);

/**The os module
 *
 */
console.log(os.cpus());

//EXERCISE ONE
let kgl_branches = { branch1: "Kampala", branch2: "Wakiso" };
let stringedObject = JSON.stringify(kgl_branches);

fs.writeFile("KGL_config.json", stringedObject, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully  loaded data");
  }
});

//EXERCISE TWO
fs.readFile("KGL_config.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let parsedObject = JSON.parse(data);
    console.log(parsedObject);
    console.log("Data loaded successfully");
  }
});

//CREATING A SERVER
let http = require("http");
const server = http.createServer((req, res) => {
  console.log("server is running successfull on port 3000");
});
