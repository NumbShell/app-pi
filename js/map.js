function initMap() {

	var me = {
		info: '<strong>Masse</strong><br>\
					Hökvägen 3<br> 37030 Rödeby<br>\
					<a href="http://jag2">Se Profil</a>',
					lat: 56.258243,
					long: 15.629830
	};

	var karlshamn = {
		info: '<strong>Campus Karlshamn</strong><br>\
					Pirgatan<br> Karlshamn 60657<br>\
					<a target="_blank" href="https://www.bth.se/om-bth/campus/#section-campus-karlshamn">Besök Sida</a>',
		lat: 56.164240,
		long: 14.866022
	};

	var karlskrona = {
		info: '<strong>Campus Gräsvik</strong><br>\r\
					Valhallagatan<br> Karlskrona<br>\
					<a href="https://www.bth.se/om-bth/campus/#section-campus-grasvik-karlskrona">Besök Sida</a>',
		lat: 56.182302,
		long: 15.590746
	};

	var kastellet = {
		info: '<strong>Kastellet</strong><br>\r\
					Östersjön<br> Karlshamn<br>\
					<a href="http://www.bth.se">Besök Sida</a>',
		lat: 56.160180,
		long: 14.865595
	};

	var gruber = {
		info: '<strong>Simon Gruber</strong><br>\
					Björkallen 19<br> Oskarström<br>\
					<a href="https://www.facebook.com/Zersixs" target="_blank">Se Profil</a>',
		lat: 56.80425,
		long: 12.96349
	};

	var markus = {
		info: '<strong>Markus Lindström</strong><br>\
					Kullbäckstorpsvägen 21<br>\
					<a href="https://www.facebook.com/BergetPaVift?fref=nf" target="_blank">Se Profil</a>',
		lat: 57.708870,
		long: 11.974560
	};

	var jesper = {
		info: '<strong>Jesper Truedsson</strong><br>\
					Hantverkaregatan 91b<br>\
					<a href="https://www.facebook.com/jesper.truedsson?fref=ufi" target="_blank">Se Profil</a>',
		lat: 56.1736735,
		long: 14.8645453
	};

	var simon_persson = {
		info: '<strong>Simon Persson</strong><br>\
					Sjövägen 10<br>\
					<a href="https://www.facebook.com/simon.persson.7355?fref=ufi" target="_blank">Se Profil</a>',
		lat: 56.428979,
		long: 12.850196
	};

	var simon_larsson = {
		info: '<strong>Simon Larsson</strong><br>\
					Landsvägen 1062<br>\
					<a href="https://www.facebook.com/simon.larsson.735944?fref=nf" target="_blank">Se Profil</a>',
		lat: 55.460745,
		long: 13.152219
	};

	var malin_bredin = {
		info: '<strong>Malin Bredin</strong><br>\
					Egnahemsvägen 4A<br>\
					<a href="https://www.facebook.com/malinbrediin?fref=nf" target="_blank">Se Profil</a>',
		lat: 59.6849552,
		long: 16.6273682
	};

	var jonathan_franke = {
		info: '<strong>Jonathan Franke</strong><br>\
					Lund, Tryckerigatan 4<br>\
					<a href="#" target="_blank">Se Profil</a>',
		lat: 55.710246,
		long: 13.182447
	};

	var alexander_sohlin = {
		info: '<strong>Alexander Sohlin</strong><br>\
					Timotejvägen 27, Bollstabruk <br>\
					<a href="#" target="_blank">Se Profil</a>',
		lat: 62.999601,
		long: 17.651606
	};

	var william_meeuwisse = {
		info: '<strong>William Meeuwisse</strong><br>\
					Ringvägen 19, Bollstabruk <br>\
					<a href="https://www.facebook.com/william.meeuwisse?fref=ufi" target="_blank">Se Profil</a>',
		lat: 56.189816,
		long: 15.594642
	};

	var sebastian_selin = {
		info: '<strong>Sebastian Selin</strong><br>\
					Hällgumsgatan 25B, 87236 Kramfors <br>\
					<a href="https://www.facebook.com/sebastian.s.selin?fref=ufi" target="_blank">Se Profil</a>',
		lat: 62.932723,
		long: 17.761792
	};

	var nils_leandersson = {
		info: '<strong>Nils Leandersson</strong><br>\
					Väbynäsvägen 48, Bräkne-Hoby <br>\
					<a href="https://searchosm.com/min.html" target="_blank">Se Websida</a>',
		lat: 56.16028,
		long: 15.13351
	};

	var city_gross = {
		info: '<strong>City Gross Karlshamn</strong><br>\
					Erik Dahlbergsvägen 101<br>\
					<a href="https://www.citygross.se/butiker/karlshamn/" target="_blank">Besök Sida</a><br>',
		lat: 56.177390,
		long: 14.855736
	};

	var bio_metropol = {
		info: '<strong>Bio Metropol</strong><br>\
					Norra Fogdelyckegatan 24<br>\
					<a href="http://www.biometropol.se/" target="_blank">Besök Sida</a><br>',
		lat: 56.173115,
		long: 14.860366
	};

	var coop_forum = {
		info: '<strong>Coop Forum</strong><br>\
					Strömmavägen 1<br>\
					374 32 Karlshamn<br>\
					<a href="https://www.coop.se/butiker-varor--erbjudanden/butiker-import/coop-forum/coop-forum-karlshamn/" target="_blank">Besök Sida</a>',
		lat: 56.190585,
		long: 14.848269
	};


	var locations = [
      		[me.info, me.lat, me.long, 0],
      		[karlshamn.info, karlshamn.lat, karlshamn.long, 1],
      		[karlskrona.info, karlskrona.lat, karlskrona.long, 2],
			[kastellet.info, kastellet.lat, kastellet.long, 3],
			[gruber.info, gruber.lat, gruber.long],[markus.info, markus.lat, markus.long, 4],
			[city_gross.info, city_gross.lat, city_gross.long, 5],[jesper.info, jesper.lat, jesper.long, 6],
			[bio_metropol.info, bio_metropol.lat, bio_metropol.long, 7],
			[simon_persson.info, simon_persson.lat, simon_persson.long, 8],
			[simon_larsson.info, simon_larsson.lat, simon_larsson.long, 9],
			[malin_bredin.info, malin_bredin.lat, malin_bredin.long, 10],
			[jonathan_franke.info, jonathan_franke.lat, jonathan_franke.long, 11],
			[alexander_sohlin.info, alexander_sohlin.lat, alexander_sohlin.long, 12],
			[william_meeuwisse.info, william_meeuwisse.lat, william_meeuwisse.long, 13],
			[coop_forum.info, coop_forum.lat, coop_forum.long, 14],
			[sebastian_selin.info, sebastian_selin.lat, sebastian_selin.long],
			[nils_leandersson.info, nils_leandersson.lat, nils_leandersson.long]	
    ];

    var mapOptions = {
    	center: new google.maps.LatLng(56.177390, 14.9),
    	zoom: 7, 

    	disableDefaultUI: true,

    	styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":
    	[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":
    	[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":
    	[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":
    	[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":
    	[{"color":"red"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":
    	[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":
    	[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":
    	[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":
    	[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":
    	[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":
    	[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":
    	[{"color":"#000000"},{"lightness":11}]}]
  };


  	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);


	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	google.maps.event.addListener(infowindow, 'domready', function() {

   // Reference to the DIV which receives the contents of the infowindow using jQuery
   var iwOuter = $('.gm-style-iw');

   /* The DIV we want to change is above the .gm-style-iw DIV.
    * So, we use jQuery and create a iwBackground variable,
    * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
    */
   var iwBackground = iwOuter.prev();

   // Remove the background shadow DIV
   iwBackground.children(':nth-child(2)').css({'display' : 'none'});

   // Remove the white background DIV
   iwBackground.children(':nth-child(4)').css({'display' : 'none'});

   // Moves the infowindow 115px to the right.
	//iwOuter.parent().parent().css({left: '115px'});

	// Taking advantage of the already established reference to
	// div .gm-style-iw with iwOuter variable.
	// You must set a new variable iwCloseBtn.
	// Using the .next() method of JQuery you reference the following div to .gm-style-iw.
	// Is this div that groups the close button elements.
	var iwCloseBtn = iwOuter.next();


	// Apply the desired effect to the close button
	iwCloseBtn.css({
		'position' : 'absolute',
		'box-shadow' : '0px 8px 8px black',
  		opacity: '1', // by default the close button has an opacity of 0.7
  		//right: '0px', top: '3px', // button repositioning
  		border: '0px solid white', // increasing button border and new color
  		'border-radius': '3px', // circular effect
  		'box-shadow': '0 0 5px #3990B9', // 3D effect to highlight the button
  });

	// The API automatically applies 0.7 opacity to the button after the mouseout event.
	// This function reverses this event to the desired value.
	iwCloseBtn.mouseout(function(){
  		$(this).css({opacity: '1'});
	});

});

	var image = new google.maps.MarkerImage (
		'image/pin.png',
		null, /* size is determined at runtime */
    	null, /* origin is 0,0 */
    	null, /* anchor is bottom center of the scaled image */
    	new google.maps.Size(25, 40)
    	);

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map,
			icon: image
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}