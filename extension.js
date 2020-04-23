const vscode = require('vscode');
const endsWith = require('lodash/endsWith');
let terminal = '';

function runJest(pathOfFile){
	console.log(pathOfFile)
	terminal = vscode.window.createTerminal('Tests terminal');
	terminal.show()
	if(endsWith(pathOfFile, '.test.js')){
		terminal.sendText(`node_modules/.bin/jest --watch -- ${pathOfFile} `)
	}
}

function activate() {
	vscode.window.onDidChangeActiveTextEditor(function (editor) {
		vscode.window.showInformationMessage(`Running Jest Tests`)	
		if(terminal){
			terminal.dispose();
		}
		
		runJest(editor.document.fileName)
	})
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
