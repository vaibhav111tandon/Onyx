
            function initMap() {
                var usRoadMapType = new google.maps.StyledMapType([
                      {
                        featureType: 'all',
                        elementType: 'all',
                        stylers: [
                          {invert_lightness: 'true'},        
                          {hue: '#335158'},
                          {saturation: 40},
                          {lightness: 30},         
                          {gamma: 0.5}
                        ]
                      }
                    ], {name: 'Dark Style'});  
                  var uluru = {lat: 42.316725, lng: -75.392093};
                  var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 10,
                    center: uluru,
                    mapTypeControlOptions: {
                      position: google.maps.ControlPosition.TOP_LEFT,
                      mapTypeIds: [google.maps.MapTypeId.ROADMAP,
                        google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID,
                        google.maps.MapTypeId.TERRAIN, 'usroadatlas']
                    },  
                    zoomControlOptions: {
                        position: google.maps.ControlPosition.LEFT_TOP
                    },
                    streetViewControlOptions: {
                        position: google.maps.ControlPosition.LEFT_TOP
                    }
                  });
                map.mapTypes.set('usroadatlas', usRoadMapType);
                map.setMapTypeId('usroadatlas');
                  var contentString = '<div class="map-info-box">'+ 
                     '<div class="map-head">'+ 
                     '<h3>Launch</h3></div>'+ 
                     '<p class="map-address"><i class="fa fa-map-marker"></i> Lorem ipsum dolor sit amet <br><i class="fa fa-phone"></i> 800-8765-4321<br><span class="map-email"><i class="fa fa-envelope"></i> info@yoursite.com</span></p>'+ 
                     '<p><a href="https://www.google.com/maps/place/8+Bridge+St,+Sidney,+NY+13838,+Birle%C5%9Fik+Devletler/@42.31647,-75.392079,19z/data=!3m1!4b1!4m5!1m2!2m1!1s60+MAIN+ST.+SIDNEY,+NY+13838+ABD!3m1!1s0x89dba3d449a51193:0x4e86a4772df5fa8f" target="_blank">Open on Google Maps</a></p></div>';
                  
                  var infowindow = new google.maps.InfoWindow({
                    content: contentString
                  });
                  var image = 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/48/map-marker-icon.png';
                  var marker = new google.maps.Marker({
                    position: uluru,
                    map: map,
                    icon: image,
                    title: 'Uluru (Ayers Rock)'
                  });
                  marker.addListener('click', function() {
                    infowindow.open(map, marker);
                  });
                   marker.addListener('click', function() {
                    map.setZoom(14);
                    map.setCenter(marker.getPosition());
                  });
                }
                google.maps.event.addDomListener(window, "load", initMap);
                window.onorientationchange = function(){window.location.reload();}
                