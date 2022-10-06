// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');

var lines = [];
lines[0] = "  ###    #####    ####  ####    #####  #####   ####    ##   ##  ##      ##  ##  ##  ##      ###    ###  ##     ##   #####   #####    #####   #####     ####  ######  ##   ##  ##   ##  ##      ##  ##    ##  ##    ##  ######   ####     #    ####    ####     #  ##  ######     ##   ######   ####    ####              ###  ###          #  #     ##  ##   ## ##  ##                        ##                ##   ####                 ";
lines[1] = " ## ##   ##  ##  ##     ##  ##  ##     ##     ##       ##   ##  ##      ##  ## ##   ##      ## #  # ##  ####   ##  ##   ##  ##  ##  ##   ##  ##  ##   ##       ##    ##   ##  ##   ##  ##      ##   ##  ##    ##  ##      ##   ##  ##  ###   #    #  #   ##   #   ##  ##       ##         ##  #   ##  #   ##             #      #         #    #   ########   #  #   #  ######                ##                ##  #   ##    ###         ";
lines[2] = "##   ##  #####   ##     ##  ##  #####  #####  ##  ###  #######  ##      ##  ####    ##      ##  ##  ##  ##  ## ##  ##   ##  #####   ##   ##  #####     ###     ##    ##   ##  ##   ##  ##  ##  ##    ####      ####      ##    #    #   ##      ##     ###   #######  #####   #####      #     ####    #####             #      #        ##    ##   ##  ##                      ########  ##########            ##     ##   ##   ##   ##  ";
lines[3] = "#######  ##  ##  ##     ##  ##  ##     ##     ##   ##  ##   ##  ##  ##  ##  ## ##   ##      ##      ##  ##    ###  ##   ##  ##       #####   ##  ##      ##    ##    ##   ##   ## ##   ##  ##  ##   ##  ##      ##      ##     ##  ##   ##    ##     #   ##       ##      ##  ##   #    ##    #   ##      ##         ##  #      #         #    #   ########             ######                ##                                  ###     ";
lines[4] = "##   ##  #####    ####  ####    #####  ##      ####    ##   ##  ##   ####   ##  ##  ######  ##      ##  ##     ##   #####   ##           ##  ##   ##  ####     ##     #####     ###     ###  ###   ##    ##     ##     ######   ####   ####  ######   ####        ##  #####    ####     ##     ####     ###         ##   ###  ###    ##    #  #     ##  ##                                    ##      ########  ##     #                  ";

var letters = {};
letters["A"] = 0;
letters["B"] = 9;
letters["C"] = 17;
letters["D"] = 24;
letters["E"] = 32;
letters["F"] = 39;
letters["G"] = 46;
letters["H"] = 55;
letters["I"] = 64;
letters["J"] = 68;
letters["K"] = 76;
letters["L"] = 84;
letters["M"] = 92;
letters["N"] = 104;
letters["O"] = 115;
letters["P"] = 124;
letters["Q"] = 132;
letters["R"] = 141;
letters["S"] = 150;
letters["T"] = 157;
letters["U"] = 165;
letters["V"] = 174;
letters["W"] = 183;
letters["X"] = 195;
letters["Y"] = 205;
letters["Z"] = 215;
letters["0"] = 223;
letters["1"] = 231;
letters["2"] = 237;
letters["3"] = 245;
letters["4"] = 253;
letters["5"] = 262;
letters["6"] = 270;
letters["7"] = 278;
letters["8"] = 286;
letters["9"] = 294;
letters[" "] = 302;
letters[","] = 308;
letters["["] = 313;
letters["]"] = 318;
letters["."] = 325;
letters["("] = 329;
letters[")"] = 334;
letters["#"] = 339;
letters["\""] = 349;
letters["'"] = 356;
letters["="] = 360;
letters["-"] = 368;
letters["+"] = 378;
letters["_"] = 390;
letters["!"] = 400;
letters["?"] = 404;
letters["~"] = 412;

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

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    console.log('loaded "comment-labels"');

    var lastlet = false;
    var sequence = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,[].()#\"'=-+_!?~";
    for(var c = 0; c < sequence.length; c++)
    {
    var let = sequence[c];
        if(lastlet)
        {
            letters[lastlet] = [letters[lastlet], letters[let] - letters[lastlet]];
        }
        lastlet = let;
    }
    letters["~"] = [letters["~"], lines[0].length - letters["~"]];

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.commentLabel', function () {
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        // Check what is the editor language
        var language = editor.document.languageId;
        // Get the language comment
        var comment = comments[language] || "//";

        var selection = editor.selection;
        var str = editor.document.getText(selection).trim();
        if(str == "")
            return;

        editor.edit(function (builder) {
            str = str.toUpperCase();
            var plines = new Array(5);
            for(var c in str)
            {
                var ch = str[c];
                if(letters[ch] == undefined)
                    letters[ch] = letters[" "];

                for(var p = 0; p < plines.length; p++)
                {
                    if(plines[p] == undefined)
                {
                    plines[p] = comment + "  ";
                }
                plines[p] += lines[p].substr(letters[ch][0],letters[ch][1]);
                }
            }

            var outp = "";
            var borderline = "";
            var paddingline = "";
            for(var c = 0; c < plines[0].length; c++)
            {
                borderline += "=";
                paddingline += " ";
            }
            borderline = comment + borderline;
            paddingline = comment + paddingline;
            
            outp += borderline + "\n";
            outp += paddingline + "\n";
            for(var p = 0; p < plines.length; p++)
            {
                outp += plines[p] + "\n";
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

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;