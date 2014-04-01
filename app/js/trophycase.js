var showMain = function() {
	$("#trophycase").load("app/snippets/tcMain.html", function() {
    updateBars();
    updateIcons();
  });
}
var showLowerScience = function() {
	$("#trophycase").load("app/snippets/tcLowerScience.html", function() {
    updateBars();
    updateIcons();
  });
}

var showArts = function() {
	$("#trophycase").load("app/snippets/tcArts.html", function() {
    updateBars();
    updateIcons();
  })
}

var showCPSC1XX = function() {
	$("#trophycase").load("app/snippets/tcCPSC1XX.html", function() {
    updateBars();
    updateIcons();
  })
}

var showCPSC2XX = function() {
	$("#trophycase").load("app/snippets/tcCPSC2XX.html", function() {
    updateBars();
    updateIcons();
  })
}
