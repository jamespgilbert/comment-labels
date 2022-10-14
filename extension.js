var vscode = require('vscode');
const fs = require('fs');

// Load letters form a file. Each letter has two spaces before and after each line to
// make them easier to edit.
var letters = JSON.parse(fs.readFileSync(__dirname + '/letters.json', 'utf8'));
for (var letter in letters) {
    letters[letter] = letters[letter].map((line) => line.slice(2, -2))
}

// Comments in languages where the comment character is at the beginning of the line and is not '//'
// TODO: I'm sure this could be gotten from the language configuration, but i'm not sure how,
//       so here are a few more popular languages which use non-'//' comments.
comments = [];
comments["python"] = "##";
comments["ruby"] = "##";
comments["perl"] = "##";
comments["powershell"] = "##";
comments["lua"] = "--";
comments["haskell"] = "--";
comments["clojure"] = ";;";
comments["coffeescript"] = "##";
comments["r"] = "##";
comments["shellscript"] = "##";
comments["tex"] = "%%";

default_comment = "//";

function activate(context) {
    console.log('loaded "comment-labels"');

    var disposable = vscode.commands.registerCommand('extension.commentLabel', function () {
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        // Get the language comment
        var language = editor.document.languageId;
        var comment = comments[language] || default_comment;

        var selection = editor.selection;
        var str = editor.document.getText(selection).trim();
        if(str == "") {
            return;
        }

        editor.edit(function (builder) {
            var lines = new Array(5);
            for(var c in str) {
                var ch = str[c];
                letter = letters[ch] == undefined ? letters[" "] : letters[ch];
                for(var i = 0; i < lines.length; i++) {
                    lines[i] = lines[i] == undefined ? comment : lines[i];
                    lines[i] += "  " + letter[i];
                }
            }

            var outp = "";
            var borderline = "";
            var paddingline = "";
            for(var c = 0; c < lines[0].length; c++) {
                borderline += "=";
                paddingline += " ";
            }
            borderline = comment + borderline;
            paddingline = comment + paddingline;
            
            outp += borderline + "\n";
            outp += paddingline + "\n";
            for(var p = 0; p < lines.length; p++) {
                outp += lines[p] + "\n";
            }
            outp += paddingline + "\n";
            outp += borderline + "\n";
            
            builder.replace(selection, outp);
        });
        // Display a message box to the user
        //vscode.window.showInformationMessage('Selected characters: ' + text.length);
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;