function addGoogleMarker(n,t,i,r,u,f,e){var s=new google.maps.LatLng(t,i),h=new google.maps.Marker({map:n,position:s,title:r,icon:e}),o;u&&(o=new google.maps.InfoWindow({content:u}));google.maps.event.addListener(h,"click",function(){var t=n.getZoom();n.setCenter(s);t!==f&&n.setZoom(f);o&&o.open(n,h)})}