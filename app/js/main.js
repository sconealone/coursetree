$(document).ready(function() {
  // Load the four divs with their default html
  	$('[data-toggle="tooltip"]').tooltip();
	$("#trophycase").load("app/snippets/tcMain.html");
	$("#coursetree").load("app/snippets/ctMain.html");
	$("#informationpanel").load("app/snippets/ipMain.html");
	$("#controlpanel").load("app/snippets/cpMain.html");
});

