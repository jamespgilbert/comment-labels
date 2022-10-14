var vscode = require('vscode');

// Printable ASCII characters library from char 32 (space) to 126 (~)
var letters = [];

sequence = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
for(var i = 0; i < sequence.length; i++) {
    letters[sequence[i]] = new Array(5);
}

letters[" "][0] = "        ";
letters[" "][1] = "        ";
letters[" "][2] = "        ";
letters[" "][3] = "        ";
letters[" "][4] = "        ";

letters["!"][0] = "  ##  ";
letters["!"][1] = "  ##  ";
letters["!"][2] = "  ##  ";
letters["!"][3] = "      ";
letters["!"][4] = "  ##  ";

letters["\""][0] = "  ## ##  ";
letters["\""][1] = "   #  #  ";
letters["\""][2] = "         ";
letters["\""][3] = "         ";
letters["\""][4] = "         ";

letters["#"][0] = "   #  #   ";
letters["#"][1] = "  ######  ";
letters["#"][2] = "   #  #   ";
letters["#"][3] = "  ######  ";
letters["#"][4] = "   #  #   ";

letters["$"][0] = "   #####  ";
letters["$"][1] = "  #  #    ";
letters["$"][2] = "   ####   ";
letters["$"][3] = "    #  #  ";
letters["$"][4] = "  #####   ";

letters["&"][0] = "   ##     ";
letters["&"][1] = "  #  #    ";
letters["&"][2] = "   ### #  ";
letters["&"][3] = "  #   ##  ";
letters["&"][4] = "   ####   ";

letters["'"][0] = "  ##  ";
letters["'"][1] = "   #  ";
letters["'"][2] = "      ";
letters["'"][3] = "      ";
letters["'"][4] = "      ";

letters["("][0] = "   ##  ";
letters["("][1] = "  #    ";
letters["("][2] = "  #    ";
letters["("][3] = "  #    ";
letters["("][4] = "   ##  ";

letters[")"][0] = "  ##   ";
letters[")"][1] = "    #  ";
letters[")"][2] = "    #  ";
letters[")"][3] = "    #  ";
letters[")"][4] = "  ##   ";

letters["*"][0] = "  #  #  ";
letters["*"][1] = "   ##   ";
letters["*"][2] = "  #  #  ";
letters["*"][3] = "        ";
letters["*"][4] = "        ";

letters["+"][0] = "       ";
letters["+"][1] = "   #   ";
letters["+"][2] = "  ###  ";
letters["+"][3] = "   #   ";
letters["+"][4] = "       ";

letters[","][0] = "       ";
letters[","][1] = "       ";
letters[","][2] = "       ";
letters[","][3] = "   ##  ";
letters[","][4] = "  ##   ";

letters["-"][0] = "          ";
letters["-"][1] = "          ";
letters["-"][2] = "  ######  ";
letters["-"][3] = "          ";
letters["-"][4] = "          ";

letters["."][0] = "      ";
letters["."][1] = "      ";
letters["."][2] = "      ";
letters["."][3] = "      ";
letters["."][4] = "  ##  ";

letters["/"][0] = "      ##  ";
letters["/"][1] = "     ##   ";
letters["/"][2] = "    ##    ";
letters["/"][3] = "   ##     ";
letters["/"][4] = "  ##      ";

letters["0"][0] = "   ####   ";
letters["0"][1] = "  ##  ##  ";
letters["0"][2] = "  #    #  ";
letters["0"][3] = "  ##  ##  ";
letters["0"][4] = "   ####   ";

letters["1"][0] = "   ##   ";
letters["1"][1] = "  ###   ";
letters["1"][2] = "   ##   ";
letters["1"][3] = "   ##   ";
letters["1"][4] = "  ####  ";

letters["2"][0] = "   ####   ";
letters["2"][1] = "  #    #  ";
letters["2"][2] = "     ##   ";
letters["2"][3] = "   ##     ";
letters["2"][4] = "  ######  ";

letters["3"][0] = "   ####   ";
letters["3"][1] = "  #   ##  ";
letters["3"][2] = "    ###   ";
letters["3"][3] = "  #   ##  ";
letters["3"][4] = "   ####   ";

letters["4"][0] = "   ## ##  ";
letters["4"][1] = "  ##  ##  ";
letters["4"][2] = "  ######  ";
letters["4"][3] = "      ##  ";
letters["4"][4] = "      ##  ";

letters["5"][0] = "  ######  ";
letters["5"][1] = "  ##      ";
letters["5"][2] = "  #####   ";
letters["5"][3] = "      ##  ";
letters["5"][4] = "  #####   ";

letters["6"][0] = "     ##   ";
letters["6"][1] = "   ##     ";
letters["6"][2] = "  #####   ";
letters["6"][3] = "  ##  ##  ";
letters["6"][4] = "   ####   ";

letters["7"][0] = "  ######  ";
letters["7"][1] = "      ##  ";
letters["7"][2] = "     ##   ";
letters["7"][3] = "    ##    ";
letters["7"][4] = "    ##    ";

letters["8"][0] = "   ####   ";
letters["8"][1] = "  #   ##  ";
letters["8"][2] = "   ####   ";
letters["8"][3] = "  #   ##  ";
letters["8"][4] = "   ####   ";

letters["9"][0] = "   ####   ";
letters["9"][1] = "  #   ##  ";
letters["9"][2] = "   #####  ";
letters["9"][3] = "      ##  ";
letters["9"][4] = "    ##    ";

letters[":"][0] = "      ";
letters[":"][1] = "  ##  ";
letters[":"][2] = "      ";
letters[":"][3] = "  ##  ";
letters[":"][4] = "      ";

letters[";"][0] = "       ";
letters[";"][1] = "   ##  ";
letters[";"][2] = "       ";
letters[";"][3] = "   ##  ";
letters[";"][4] = "  ##   ";

letters["<"][0] = "     ##  ";
letters["<"][1] = "   ##    ";
letters["<"][2] = " ##      ";
letters["<"][3] = "   ##    ";
letters["<"][4] = "     ##  ";

letters["="][0] = "         ";
letters["="][1] = "  #####  ";
letters["="][2] = "         ";
letters["="][3] = "  #####  ";
letters["="][4] = "         ";

letters[">"][0] = "  ##      ";
letters[">"][1] = "    ##    ";
letters[">"][2] = "      ##  ";
letters[">"][3] = "    ##    ";
letters[">"][4] = "  ##      ";

letters["?"][0] = "   ####   ";
letters["?"][1] = "  #   ##  ";
letters["?"][2] = "     ##   ";
letters["?"][3] = "          ";
letters["?"][4] = "     ##   ";

letters["@"][0] = "   ####   ";
letters["@"][1] = "  #   ##  ";
letters["@"][2] = "  #  ###  ";
letters["@"][3] = "  #  #    ";
letters["@"][4] = "   ####   ";

letters["A"][0] = "    ###    ";
letters["A"][1] = "   ## ##   ";
letters["A"][2] = "  ##   ##  ";
letters["A"][3] = "  #######  ";
letters["A"][4] = "  ##   ##  ";

letters["B"][0] = "  #####   ";
letters["B"][1] = "  ##  ##  ";
letters["B"][2] = "  #####   ";
letters["B"][3] = "  ##  ##  ";
letters["B"][4] = "  #####   ";

letters["C"][0] = "   #####  ";
letters["C"][1] = "  ##      ";
letters["C"][2] = "  ##      ";
letters["C"][3] = "  ##      ";
letters["C"][4] = "   #####  ";

letters["D"][0] = "  #####   ";
letters["D"][1] = "  ##  ##  ";
letters["D"][2] = "  ##  ##  ";
letters["D"][3] = "  ##  ##  ";
letters["D"][4] = "  #####   ";

letters["E"][0] = "  ######  ";
letters["E"][1] = "  ##      ";
letters["E"][2] = "  #####   ";
letters["E"][3] = "  ##      ";
letters["E"][4] = "  ######  ";

letters["F"][0] = "  ######  ";
letters["F"][1] = "  ##      ";
letters["F"][2] = "  #####   ";
letters["F"][3] = "  ##      ";
letters["F"][4] = "  ##      ";

letters["G"][0] = "   #####   ";
letters["G"][1] = "  ##       ";
letters["G"][2] = "  ##  ###  ";
letters["G"][3] = "  ##   ##  ";
letters["G"][4] = "   #####   ";

letters["H"][0] = "  ##   ##  ";
letters["H"][1] = "  ##   ##  ";
letters["H"][2] = "  #######  ";
letters["H"][3] = "  ##   ##  ";
letters["H"][4] = "  ##   ##  ";

letters["I"][0] = "  ##  ";
letters["I"][1] = "  ##  ";
letters["I"][2] = "  ##  ";
letters["I"][3] = "  ##  ";
letters["I"][4] = "  ##  ";

letters["J"][0] = "      ##  ";
letters["J"][1] = "      ##  ";
letters["J"][2] = "      ##  ";
letters["J"][3] = "  ##  ##  ";
letters["J"][4] = "   ####   ";

letters["K"][0] = "  ##  ##  ";
letters["K"][1] = "  ## ##   ";
letters["K"][2] = "  ####    ";
letters["K"][3] = "  ## ##   ";
letters["K"][4] = "  ##  ##  ";

letters["L"][0] = "  ##      ";
letters["L"][1] = "  ##      ";
letters["L"][2] = "  ##      ";
letters["L"][3] = "  ##      ";
letters["L"][4] = "  ######  ";

letters["M"][0] = "  ##    ##  ";
letters["M"][1] = "  ###  ###  ";
letters["M"][2] = "  ## ## ##  ";
letters["M"][3] = "  ##    ##  ";
letters["M"][4] = "  ##    ##  ";

letters["N"][0] = "  ##   ##  ";
letters["N"][1] = "  ###  ##  ";
letters["N"][2] = "  #### ##  ";
letters["N"][3] = "  ## ####  ";
letters["N"][4] = "  ##  ###  ";

letters["O"][0] = "   ####   ";
letters["O"][1] = "  ##  ##  ";
letters["O"][2] = "  ##  ##  ";
letters["O"][3] = "  ##  ##  ";
letters["O"][4] = "   ####   ";

letters["P"][0] = "  #####   ";
letters["P"][1] = "  ##  ##  ";
letters["P"][2] = "  #####   ";
letters["P"][3] = "  ##      ";
letters["P"][4] = "  ##      ";

letters["Q"][0] = "   #####   ";
letters["Q"][1] = "  ##   ##  ";
letters["Q"][2] = "  ##   ##  ";
letters["Q"][3] = "   #####   ";
letters["Q"][4] = "       ##  ";

letters["R"][0] = "  #####    ";
letters["R"][1] = "  ##  ##   ";
letters["R"][2] = "  #####    ";
letters["R"][3] = "  ##  ##   ";
letters["R"][4] = "  ##   ##  ";

letters["S"][0] = "   ####  ";
letters["S"][1] = "  ##     ";
letters["S"][2] = "   ###   ";
letters["S"][3] = "     ##  ";
letters["S"][4] = "  ####   ";

letters["T"][0] = "  ######  ";
letters["T"][1] = "    ##    ";
letters["T"][2] = "    ##    ";
letters["T"][3] = "    ##    ";
letters["T"][4] = "    ##    ";

letters["U"][0] = "  ##   ##  ";
letters["U"][1] = "  ##   ##  ";
letters["U"][2] = "  ##   ##  ";
letters["U"][3] = "  ##   ##  ";
letters["U"][4] = "   #####   ";

letters["V"][0] = "  ##   ##  ";
letters["V"][1] = "  ##   ##  ";
letters["V"][2] = "  ##   ##  ";
letters["V"][3] = "   ## ##   ";
letters["V"][4] = "    ###    ";

letters["W"][0] = "  ##    ##  ";
letters["W"][1] = "  ##    ##  ";
letters["W"][2] = "  ## ## ##  ";
letters["W"][3] = "  ###  ###  ";
letters["W"][4] = "  ##    ##  ";

letters["X"][0] = "  ##   ##  ";
letters["X"][1] = "   ## ##   ";
letters["X"][2] = "    ###    ";
letters["X"][3] = "   ## ##   ";
letters["X"][4] = "  ##   ##  ";

letters["Y"][0] = "  ##    ##  ";
letters["Y"][1] = "   ##  ##   ";
letters["Y"][2] = "    ####    ";
letters["Y"][3] = "     ##     ";
letters["Y"][4] = "     ##     ";

letters["Z"][0] = "  ######  ";
letters["Z"][1] = "     ##   ";
letters["Z"][2] = "    ##    ";
letters["Z"][3] = "   ##     ";
letters["Z"][4] = "  ######  ";

letters["["][0] = "  ###  ";
letters["["][1] = "  #    ";
letters["["][2] = "  #    ";
letters["["][3] = "  #    ";
letters["["][4] = "  ###  ";

letters["\\"][0] = "  ##      ";
letters["\\"][1] = "   ##     ";
letters["\\"][2] = "    ##    ";
letters["\\"][3] = "     ##   ";
letters["\\"][4] = "      ##  ";

letters["]"][0] = "  ###  ";
letters["]"][1] = "    #  ";
letters["]"][2] = "    #  ";
letters["]"][3] = "    #  ";
letters["]"][4] = "  ###  ";

letters["^"][0] = "    ###    ";
letters["^"][1] = "   ## ##   ";
letters["^"][2] = "  ##   ##  ";
letters["^"][3] = "           ";
letters["^"][4] = "           ";

letters["_"][0] = "           ";
letters["_"][1] = "           ";
letters["_"][2] = "           ";
letters["_"][3] = "           ";
letters["_"][4] = "  #######  ";

letters["`"][0] = "  ##   ";
letters["`"][1] = "   ##  ";
letters["`"][2] = "    #  ";
letters["`"][3] = "       ";
letters["`"][4] = "       ";

letters["a"][0] = "          ";
letters["a"][1] = "          ";
letters["a"][2] = "   ####   ";
letters["a"][3] = "  #  ##   ";
letters["a"][4] = "   #####  ";

letters["b"][0] = "  ##      ";
letters["b"][1] = "  ##      ";
letters["b"][2] = "  #####   ";
letters["b"][3] = "  ##  ##  ";
letters["b"][4] = "  #####   ";

letters["c"][0] = "         ";
letters["c"][1] = "   ####  ";
letters["c"][2] = "  ##     ";
letters["c"][3] = "  ##     ";
letters["c"][4] = "   ####  ";

letters["d"][0] = "      ##  ";
letters["d"][1] = "      ##  ";
letters["d"][2] = "   #####  ";
letters["d"][3] = "  ##  ##  ";
letters["d"][4] = "   ####   ";

letters["e"][0] = "         ";
letters["e"][1] = "   ####  ";
letters["e"][2] = "  ##  #  ";
letters["e"][3] = "  ###    ";
letters["e"][4] = "   ####  ";

letters["f"][0] = "    ###  ";
letters["f"][1] = "   ##    ";
letters["f"][2] = "  ####   ";
letters["f"][3] = "   ##    ";
letters["f"][4] = "   ##    ";

letters["g"][0] = "          ";
letters["g"][1] = "   ####   ";
letters["g"][2] = "  ##  ##  ";
letters["g"][3] = "   ####   ";
letters["g"][4] = "  ##      ";

letters["h"][0] = "  ##      ";
letters["h"][1] = "  ##      ";
letters["h"][2] = "  #####   ";
letters["h"][3] = "  ##  ##  ";
letters["h"][4] = "  ##  ##  ";

letters["i"][0] = "   ##  ";
letters["i"][1] = "       ";
letters["i"][2] = "  ###  ";
letters["i"][3] = "   ##  ";
letters["i"][4] = "   ##  ";

letters["j"][0] = "     ##  ";
letters["j"][1] = "         ";
letters["j"][2] = "    ###  ";
letters["j"][3] = "     ##  ";
letters["j"][4] = "  ####   ";

letters["k"][0] = "  ##     ";
letters["k"][1] = "  ##     ";
letters["k"][2] = "  ## ##  ";
letters["k"][3] = "  ####   ";
letters["k"][4] = "  ## ##  ";

letters["l"][0] = "  ###   ";
letters["l"][1] = "   ##   ";
letters["l"][2] = "   ##   ";
letters["l"][3] = "   ##   ";
letters["l"][4] = "  ####  ";

letters["m"][0] = "             ";
letters["m"][1] = "             ";
letters["m"][2] = "  ########   ";
letters["m"][3] = "  ##  #  ##  ";
letters["m"][4] = "  ##  #  ##  ";

letters["n"][0] = "          ";
letters["n"][1] = "          ";
letters["n"][2] = "  #####   ";
letters["n"][3] = "  ##  ##  ";
letters["n"][4] = "  ##  ##  ";

letters["o"][0] = "          ";
letters["o"][1] = "          ";
letters["o"][2] = "   ####   ";
letters["o"][3] = "  ##  ##  ";
letters["o"][4] = "   ####   ";

letters["p"][0] = "          ";
letters["p"][1] = "   ####   ";
letters["p"][2] = "  ##  ##  ";
letters["p"][3] = "  #####   ";
letters["p"][4] = "  ##      ";

letters["q"][0] = "          ";
letters["q"][1] = "   ####   ";
letters["q"][2] = "  ##  ##  ";
letters["q"][3] = "   #####  ";
letters["q"][4] = "      ##  ";

letters["r"][0] = "        ";
letters["r"][1] = "        ";
letters["r"][2] = "  ####  ";
letters["r"][3] = "  ##    ";
letters["r"][4] = "  ##    ";

letters["s"][0] = "        ";
letters["s"][1] = "   ###  ";
letters["s"][2] = "  ##    ";
letters["s"][3] = "    ##  ";
letters["s"][4] = "  ###   ";

letters["t"][0] = "   ##   ";
letters["t"][1] = "  ####  ";
letters["t"][2] = "   ##   ";
letters["t"][3] = "   ##   ";
letters["t"][4] = "    ##  ";

letters["u"][0] = "          ";
letters["u"][1] = "          ";
letters["u"][2] = "  ##  ##  ";
letters["u"][3] = "  ##  ##  ";
letters["u"][4] = "   ####   ";

letters["v"][0] = "          ";
letters["v"][1] = "          ";
letters["v"][2] = "  ##  ##  ";
letters["v"][3] = "   ## #   ";
letters["v"][4] = "    ##    ";

letters["w"][0] = "             ";
letters["w"][1] = "             ";
letters["w"][2] = "  ##  #  ##  ";
letters["w"][3] = "  ##  #  ##  ";
letters["w"][4] = "   ######    ";

letters["x"][0] = "         ";
letters["x"][1] = "         ";
letters["x"][2] = "  ## ##  ";
letters["x"][3] = "   ###   ";
letters["x"][4] = "  ## ##  ";

letters["y"][0] = "           ";
letters["y"][1] = "   ##  ##  ";
letters["y"][2] = "    ####   ";
letters["y"][3] = "     ##    ";
letters["y"][4] = "  ####     ";

letters["z"][0] = "         ";
letters["z"][1] = "  #####  ";
letters["z"][2] = "    ##   ";
letters["z"][3] = "   ##    ";
letters["z"][4] = "  #####  ";

letters["{"][0] = "   ###  ";
letters["{"][1] = "   #    ";
letters["{"][2] = "  ##    ";
letters["{"][3] = "   #    ";
letters["{"][4] = "   ###  ";

letters["|"][0] = "  ##  ";
letters["|"][1] = "  ##  ";
letters["|"][2] = "  ##  ";
letters["|"][3] = "  ##  ";
letters["|"][4] = "  ##  ";

letters["}"][0] = "  ###   ";
letters["}"][1] = "    #   ";
letters["}"][2] = "    ##  ";
letters["}"][3] = "    #   ";
letters["}"][4] = "  ###   ";

letters["~"][0] = "           ";
letters["~"][1] = "   ##  ##  ";
letters["~"][2] = "  #  ##    ";
letters["~"][3] = "           ";
letters["~"][4] = "           ";

// For each line in each letter, remove the spaces before and after the letter
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