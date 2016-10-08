<html>
<head>
<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
<!--<link rel="stylesheet" type="text/css" href="theme.css">-->
</head>
<body>

<div class="forecast">
<h1>Weather Forecast</h1>
<?php
	include("simple_html_dom.php");
	$html=file_get_html("https://www.imdb.com/chart/moviemeter?ref_=nv_mv_mpm_8");
	$title=$html->find("tr.weather-icons",0)->innertext;

	$cur = $html->find("ul.chat-lines",0)->innertext;
	//$naw = $cur->find("div#current-conditions",0)->innertext;
	echo $html;
?>
</div>
</body>
</html>
