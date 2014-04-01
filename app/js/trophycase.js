var showMain = function() {
	$("#trophycase").load("app/snippets/tcMain.html", function() {
    updateBars();
  });
}
var showLowerScience = function() {
	$("#trophycase").load("app/snippets/tcLowerScience.html")
}

var showArts = function() {
	$("#trophycase").load("app/snippets/tcArts.html")
}

var showCPSC1XX = function() {
	$("#trophycase").load("app/snippets/tcCPSC1XX.html")
}

var showCPSC2XX = function() {
	$("#trophycase").load("app/snippets/tcCPSC2XX.html")
}
