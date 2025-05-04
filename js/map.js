async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 35.158558, lng: 129.063988 },
        zoom: 19,
        mapId: 'ed3bc29771171eed'
    });

    const mapWrap = document.createElement("div");
    const mapMarker = document.createElement("div");
    const markerTail = document.createElement("div");

    mapWrap.className = "marker-wrap";
    mapMarker.className = "map-marker";
    markerTail.className = "marker-tail";
    mapMarker.textContent = "radiance";

    mapWrap.appendChild(mapMarker);
    mapWrap.appendChild(markerTail);

    const marker = new AdvancedMarkerElement({
        map,
        position: { lat: 35.158610, lng: 129.064220 },
        content: mapWrap,
    });
}

function replaceStreetViewIcons() {
    const interval = setInterval(() => {
        const svImages = document.querySelectorAll('.gm-svpc > div img');
        if (svImages.length === 3) {
            svImages[0].src = '/images/map.svg'; // 첫 번째 이미지
            svImages[1].src = '/images/map_bin.svg'; // 두 번째 이미지
            svImages[2].src = '/images/map_fly.svg'; // 세 번째 이미지
            clearInterval(interval);
        }
    }, 100);
}

initMap();
setTimeout(replaceStreetViewIcons, 1000);