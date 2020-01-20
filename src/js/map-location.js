/* Map */
function initMap() {
    // Map options
    var options = {
        zoom: 15,
        center: {lat: 49.232799, lng: 28.471635}
    };

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Add marker
    addMarker({
        coords:{lat: 49.234029, lng: 28.474187},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content:'<h1>Grill Club</h1>'
    });

    // Add Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map:map,
            icon: props.iconImage,
        });
        // Check content
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
                content:props.content
            });
            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
    }
}