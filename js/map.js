window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 35.158563, lng: 129.063988 },
        zoom: 10,
    });
};