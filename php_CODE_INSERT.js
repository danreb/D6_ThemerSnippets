// JavaScript Document
function canAcceptCommand()	{
	return (dw.getDocumentDOM() != null);
}

function receiveArguments() {
	var dom = dw.getDocumentDOM();
	var aOffSets2 = new Array();
	var aOffSets1 = new Array();
	var iOffSet2 = 0;
	var iOffSet1 = 0;
	var sCode = "";
	var iOffSet = "";
	var iNbTab1 = 0;
	var iNbTab2 = 0;
	var sNbTab1 = "";
	var sNbTab2 = "";
	var sNbTab3 = "";
	var aLignes = new Array();
	var iLigne = 0;
	var sRC = "\r";
	var sTab = "\t";

  // ckecks arguments
	if (arguments.length != 1) {
		return;
	}
	
	// computes identation
	aOffSets2 = dom.source.getSelection();
	iOffSet2 = aOffSets2[0];
	// dom.source.startOfLine(false) gives an error if no alert() before ?!
	aLignes = dom.source.getCurrentLines(iOffSet2);
	iLigne = aLignes[0];
	dom.source.setCurrentLine(iLigne);
	aOffSets1 = dom.source.getSelection();
	iOffSet1 = aOffSets1[0];
	iOffSet = iOffSet2 - iOffSet1;
	iNbTab1 = iOffSet;
	
	for (i=0; i<iNbTab1 ; i++) {
  	sNbTab1 += sTab;	
	}
	sNbTab2 = sNbTab1 + sTab;
	sNbTab3 = sNbTab2 + sTab;
	
	// sets string to insert
	switch (arguments[0]) {
		case "if" :
    	sCode = "if () {" + sRC + sNbTab2 + sRC + sNbTab1 + "}";
		break;
		case "else" :
			sCode = "else {" + sRC + sNbTab2 + sRC + sNbTab1 +  "}";
			break;
		case "elseif" :
			sCode = "elseif () {" + sRC + sNbTab2 + sRC + sNbTab1 +  "}";
			break;
		case "ifelse" :
			sCode = "if () {" + sRC + sNbTab2 + sRC + sNbTab1 +  "}" + sRC + sNbTab1 + "else {" + sRC + sNbTab2 + sRC + sNbTab1 +  "}";
			break;
		case "ifelseifelse" :
			sCode = "if () {" + sRC + sNbTab2 + sRC + sNbTab1 +  "}" + sRC + sNbTab1 + "elseif () {" + sRC + sNbTab2 + sRC + sNbTab1 +  "}" + sRC + sNbTab1 + "else () {" + sRC + sNbTab2 + sRC + sNbTab1 +  "}";
			break;
		case "switch" :
			sCode = "switch () {" + sRC + sNbTab2 + "case :" + sRC + sNbTab3  + sRC + sNbTab3 + "break;" + sRC + sNbTab2 + "case :" + sRC + sNbTab3  + sRC + sNbTab3 + "break;" + sRC + sNbTab2 + "case :" + sRC + sNbTab3  + sRC + sNbTab3 + "break;" + sRC + sNbTab2 + "default :" + sRC + sNbTab3 + sRC + sNbTab1 +  "}";
			break;
		case "for" :
    	sCode = "for ($ = 0; $ < ; $ ++) {" + sRC + sNbTab2 + sRC + sNbTab1 + "}";
		break;
		case "foreach" :
    	sCode = "foreach ($ As $ => $) {" + sRC + sNbTab2 + sRC + sNbTab1 + "}";
		break;
		case "while" :
    	sCode = "while () {" + sRC + sNbTab2 + sRC + sNbTab1 + "}";
		break;
		case "do" :
    	sCode = "do {" + sRC + sNbTab2 + sRC + sNbTab1 + "} while ();";
		break;
		case "function" :
			sCode = "function () {" + sRC + sNbTab2 + sRC + sNbTab2 + "return ;"  + sRC + sNbTab1 + "}";
		break;
	} 
	
	// writes string
	dom.source.insert(iOffSet2, sCode);

	// moves cursor
	switch (arguments[0]) {
   case "if" :
      dom.source.setSelection(iOffSet2 + 4, iOffSet2 + 4);
      break;
   case "else" :
      dom.source.setSelection(iOffSet2 + iNbTab1 + 9, iOffSet2 + iNbTab1 + 9);
      break;
   case "elseif" :
      dom.source.setSelection(iOffSet2 + 8, iOffSet2 + 8);
      break;
   case "ifelse" :
      dom.source.setSelection(iOffSet2 + 4, iOffSet2 + 4);
      break;
   case "ifelseifelse" :
      dom.source.setSelection(iOffSet2 + 4, iOffSet2 + 4);
      break;
   case "switch" :
      dom.source.setSelection(iOffSet2 + 8, iOffSet2 + 8);
      break;
   case "for" :
      dom.source.setSelection(iOffSet2 + 6, iOffSet2 + 6);
      break;
   case "foreach" :
      dom.source.setSelection(iOffSet2 + 10, iOffSet2 + 10);
      break;
   case "while" :
      dom.source.setSelection(iOffSet2 + 7, iOffSet2 + 7);
      break;
   case "do" :
      dom.source.setSelection(iOffSet2 + iNbTab1 + 7, iOffSet2 + iNbTab1 + 7);
      break;
   case "function" :
      dom.source.setSelection(iOffSet2 + 9, iOffSet2 + 9);
      break;
	}
}
