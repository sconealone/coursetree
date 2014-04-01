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
		worklist.push(course);
    updateBars(worklist);
    updateIcons();
  }
}

/**
 * Check the worklist and make sure the proper credits are assigned.
 */
var updateBars = function() {
  // Each key in the map is the ID of a progress or progress-bar
  // Each value is a triple showing credits: (base, worklist, total)
  var bar_id_map = {
    "promotion": [21, 13, 48],
    "graduation": [32, 16, 120],
    "cpsc-100": [24, 0, 30],
    "cpsc-200": [0, 21, 30],
    "lower-level": [15, 0, 18],
    "arts": [9, 3, 18]
  };

  var credits = 3;
  if (worklist.indexOf("BIOL 121") > -1) {
    bar_id_map['cpsc-100'][1] += credits;
    bar_id_map['lower-level'][1] += credits;
    bar_id_map['promotion'][1] += credits;
    bar_id_map['graduation'][1] += credits;
  }
  if (worklist.indexOf("ENGL 120") > -1) {
    bar_id_map['cpsc-100'][1] += credits;
    bar_id_map['arts'][1] += credits;
    bar_id_map['promotion'][1] += credits;
    bar_id_map['graduation'][1] += credits;
  }

  credits = 4;
  if (worklist.indexOf("CPSC 213") > -1) {
    bar_id_map['cpsc-200'][1] += credits;
    bar_id_map['promotion'][1] += credits;
    bar_id_map['graduation'][1] += credits;
  }
  if (worklist.indexOf("CPSC 221") > -1) {
    bar_id_map['cpsc-200'][1] += credits;
    bar_id_map['promotion'][1] += credits;
    bar_id_map['graduation'][1] += credits;
  }

  for (var bar_id in bar_id_map) {
    var base_cr = bar_id_map[bar_id][0]
    var worklist_cr = bar_id_map[bar_id][1]
    var total_cr = bar_id_map[bar_id][2]
    $("#progress-" + bar_id).attr("title", "" + base_cr +" / " + total_cr + " credits completed (" + worklist_cr + " credits in worklist)");
    var width = parseInt(100.0 * worklist_cr / total_cr);
    $("#progress-bar-" + bar_id).attr("style", "width:" + width + "%");
  }
}

var updateIcons = function() {
  if (worklist.indexOf("BIOL 121") > -1) {
        $('#BIOL1XX').css('background-image', 'url("app/img/BIOL121.png")');
        $('#BIOL1XX').css('background-size', 'contain');
  }
  if (worklist.indexOf("ENGL 120") > -1) {
        $('#ENGL1XX').css('background-image', 'url("app/img/ENGL120.png")');
        $('#ENGL1XX').css('background-size', 'contain');
  }
  if (worklist.indexOf("CPSC 213") > -1) {
        $('#CPSC213').css('background-image', 'url("app/img/CPSC213.png")');
        $('#CPSC213').css('background-size', 'contain');
  }
  if (worklist.indexOf("CPSC 221") > -1) {
        $('#CPSC221').css('background-image', 'url("app/img/CPSC221.png")');
        $('#CPSC221').css('background-size', 'contain');
  }
}
