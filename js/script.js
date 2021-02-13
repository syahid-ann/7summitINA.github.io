/* Google Map API */
function initMap() {

/* Membuat var map dan menentukan titik tengah map untuk di display */

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: {lat:-4.513022359639175,lng:119.104929797515},
    });

/* Marker setiap tempat */

    addMarker({ lat: -4.082372427301673, lng:  137.18721854214905 });
    addMarker({lat:-1.6714018213690007,lng: 101.26592056201308});
    addMarker({lat:-8.410233608629001, lng: 116.4573916645017});
    addMarker({lat:-8.106782254934156, lng: 112.92257911049064});
    addMarker({lat:-3.3838003766768, lng: 120.02390945664145});
    addMarker({lat: -3.172133125253353, lng: 129.45517161005708});
    addMarker({lat:-0.42821645728288094,lng: 112.64443111910087});

/* Fungsi membuat marker */

    function addMarker(coords){
      const marker = new google.maps.Marker({
        position: coords,
        map: map,
      });
    }
    
}

/* Memanggil widget cuaca */

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

