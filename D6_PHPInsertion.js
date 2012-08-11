// JavaScript Document
var ExpReg = new RegExp(/\$([\w][\w->]*(\[(\'|")*[\w]*(\'|")*\])*|[\w][\w]*)/g);

function getDynamicContent(strItemID) {
// Lists variables
	var dom = dw.getDocumentDOM();	
	var strSource = dom.source.getText();
	var arrVariables = null;
	var EReg = new RegExp(/\_/g);
	
	// Sets up array and sorts	
	if (ExpReg.test(strSource)) {
		arrVariables = strSource.match(ExpReg);
		arrVariables = arrVariables.sort();
	
		// Deletes double entries
		var i = 0;
		while (i < arrVariables.length - 1) {
			if (arrVariables[i + 1] == arrVariables[i]) {
				arrVariables.splice(i + 1, 1);
			}
			else {
				i++;
			}
		}
		
		// Adds ID and deals with underscores
		for (i = 0; i < arrVariables.length; i++) {
			arrVariables[i] = arrVariables[i].replace(EReg, "%_") + ";id='" + arrVariables[i] + "'";
		}
	}
	
	return arrVariables;
}

function canAcceptCommand() {
	// Sets list of variables again, but stops at first found
	var dom = dw.getDocumentDOM();
	var strSource = dom.source.getText();
	var arrVariables = new Array();
	
	if (dom != null) {
		// Sets array ; if one variable exists, command must be enabled
		arrVariables = strSource.match(ExpReg);
		if (arrVariables == null) {
			return false;
		}
		return true;
	}
	else {
		return false;
	}
}

function receiveArguments() {
	var dom = dw.getDocumentDOM();
	var arrOffSets = new Array();
	var intOffSet = 0;
	var strCode = arguments[0];
	var arrLignes = new Array();
	var intLigne = 0;

  // checks arguments
	if (arguments.length != 1) {
		return;
	}
	
	// computes identation
	arrOffSets = dom.source.getSelection();
	intOffSet = arrOffSets[0];
	// dom.source.startOfLine(false) gibes an error if no alert() before ?!
	
	// Writes string
	dom.source.insert(intOffSet, strCode);

	// Moves cursor
	dom.source.setSelection(intOffSet + strCode.length, intOffSet + strCode.length);
}
