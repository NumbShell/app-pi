<html class="grad">
<head>
<link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="theme.css">
<title>Weather</title>
</head>
<body class="grad">

<div>
<h1>Current weather</h1>
<h2>Karlshamn</h2>

<?php
	include("simple_html_dom.php");
	$html=file_get_html("http://www.klart.se/v%C3%A4der-karlshamn.html");
	$title=$html->find("div#city-weather dl.weather dd",0)->innertext;
	echo $title;
?>
</div>

</body>
</html>
