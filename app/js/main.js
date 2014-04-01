$(document).ready(function() {
  // Load the four divs with their default html
	$("#trophycase").load("app/snippets/tcMain.html", function() {
    updateBars();
  });
	$("#coursetree").load("app/snippets/ctMain.html");
	$("#informationpanel").load("app/snippets/ipMain.html");
	$("#controlpanel").load("app/snippets/cpMain.html");
});

