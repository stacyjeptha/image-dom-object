var Image = require('./Image');

var image = new Image();
image.onload = function(){
	console.log(image.width);
	console.log(image.height);
};
image.src("http://s3.amazonaws.com/iwtms-staging/assets/family_is_where_the_heart_is_family_times_11_x_85_calendar_wire_o/72dpi/background1.png");
//image.src("http://s3.amazonaws.com/iwtms-staging/assets/family_is_where_the_heart_is_f…ly_times_11_x_85_calendar_wire_o/72dpi/_butterflykidsregular_60_fffff1.png");
