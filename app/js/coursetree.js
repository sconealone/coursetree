var showCPSC221 = function() {
  $("#informationpanel").load("app/snippets/ipCPSC221.html");
};

var showBiol1XX = function() {
  $("#informationpanel").load("app/snippets/ipBIOL1XX.html");
};

var showBIOL121 = function() {
  $("#informationpanel").load("app/snippets/ipBIOL121.html");
};

// A list of courses that fulfill the communications requirement
var showCommunications = function() {
  $("#informationpanel").load("app/snippets/ipCommunications.html");
};

var showGrades = function(course) {
	$("#informationpanel").load("app/snippets/ipGrades.html", function() {
		$("#grades").html(course);
	});
}

var showCourse = function(courseNumber, courseName) {
	var course = '' + courseNumber + ' ' + courseName;
	$("#informationpanel").load("app/snippets/ipCourse.html", function() {
		$("#courseName").html(course);
		$('span.sectionListing').html(courseNumber);
		if (worklist.indexOf(courseNumber) > -1) {
			$('#addCourseButton').removeClass('btn-primary btn-success');
			$('#addCourseButton').addClass('btn-danger');
			$('#addCourseButton').html('<span class="glyphicon glyphicon-minus"></span> Drop');
		}
	});
}


var showCoursetree = function() {
	$("#coursetree").load("app/snippets/ctMain.html");
}

var showWorklist = function() {
	$("#coursetree").load("app/snippets/ctWorklist.html");
}

var addCourse = function() {
	if ($('#addCourseButton').hasClass('btn-success')) {
		$('#addCourseButton').removeClass('btn-success');
		$('#addCourseButton').addClass('btn-danger');
		$('#addCourseButton').html('<span class="glyphicon glyphicon-minus"></span> Drop');
	}
	else if ($('#addCourseButton').hasClass('btn-primary')) {
		$('#addCourseButton').removeClass('btn-primary');
		$('#addCourseButton').addClass('btn-success');
		$('#addCourseButton').html('Added');

		var course = $('#sectionCourse').text();
    var barwidth = $('#progress-bar').width();
    var oldwidth;
    var newwidth;
    
    switch (course) {
      case "BIOL 121":
        $('#BIOL1XX').css('background-image', 'url("app/img/BIOL121.png")');
        $('#BIOL1XX').css('background-size', 'contain');
        
        oldwidth = $('#cpsc-100-progress-bar').width();
        newwidth = (oldwidth / barwidth * 100) + 10;
        $('#cpsc-100-progress-bar').width(newwidth + "%");
        
        $('#lower-level-progress-bar').width("17%");
        
        break;
      case "ENGL 120":
        $('#ENGL1XX').css('background-image', 'url("app/img/ENGL120.png")');
        $('#ENGL1XX').css('background-size', 'contain');

        oldwidth = $('#cpsc-100-progress-bar').width();
        newwidth = (oldwidth / barwidth * 100) + 10;
        $('#cpsc-100-progress-bar').width(newwidth + "%");
        
        $('#arts-progress-bar').width("33%");
        
        break;
      case "CPSC 213":
        $('#CPSC213').css('background-image', 'url("app/img/CPSC213.png")');
        $('#CPSC213').css('background-size', 'contain');
        
        oldwidth = $('#cpsc-200-progress-bar').width();
        newwidth = (oldwidth / barwidth * 100) + 15;
        $('#cpsc-200-progress-bar').width(newwidth + "%");
        
        break;
      case "CPSC 221":
        $('#CPSC221').css('background-image', 'url("app/img/CPSC221.png")');
        $('#CPSC221').css('background-size', 'contain');
        
        oldwidth = $('#cpsc-200-progress-bar').width();
        newwidth = (oldwidth / barwidth * 100) + 15;
        $('#cpsc-200-progress-bar').width(newwidth + "%");
        
        break;
      
    }
    
		worklist.push(course);
	}
}
