function countdown() {
	var now = new Date();
	var christmasDate = new Date(now.getFullYear(), 11, 25);

	var currentTime = now.getTime();

	var christmasTime = christmasDate.getTime();

	var remTime = christmasTime - currentTime;

	var s = Math.floor(remTime / 1000);
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);
	var d = Math.floor(h / 24);

	s %= 60;
	m %= 60;
	h %= 24;

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	document.getElementById("days").innerHTML = d;
	document.getElementById("hours").innerHTML = h;
	document.getElementById("minutes").innerHTML = m;
	document.getElementById("seconds").innerHTML = s;

	setTimeout(countdown, 1000);
}

var now = new Date();
//var christmasDate = new Date(now.getFullYear(), 11, 25);
var date = now.getDate()
var month = now.getMonth()

if (date == 25 && month == 11)
{
	document.getElementById("chrimbo_suprise").style.visibility= "visible" ;
}
else
{
	countdown();
}