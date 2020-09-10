// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const axios = require("axios");
const cheerio = require("cheerio");
const server = require("./server");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

 const app = server.app
 app.listen(3000, function () {
   console.log("Server Is up and running");
 });

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("catCoding.start", async () => {
      // Create and show a new webview
      const panel = vscode.window.createWebviewPanel(
        "catCoding", // Identifies the type of the webview. Used internally
        "Cat Coding", // Title of the panel displayed to the user
        vscode.ViewColumn.Two, // Editor column to show the new webview panel in.
        {
          enableScripts: true,
        } // Webview options. More on these later.
      );

      let iteration = 0;
      const updateWebview = () => {
        panel.webview.html = getBG();
      };

      // Set initial content
      updateWebview();

      // And schedule updates to the content every second
      setInterval(updateWebview, 1000);
    })
  );
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};

async function getGoogle() {
  try {
    const request = await axios.get("http://localhost:3000");
    const data = await request.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return "Errore";
  }
}

function getBG() {
  return `<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="" />

 

    </head>
    <body>
        <iframe style="width: 100%; height: 800px" style="" id="contenuto" src="">
    </iframe>
        
        
    </body>
</html>`;

}