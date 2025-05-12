async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 35.158648, lng: 129.063918 },
        zoom: 19,
        mapId: 'ed3bc29771171eed'
    });

    const mapWrap = document.createElement("div");
    const mapMarker = document.createElement("div");
    const markerTail = document.createElement("div");

    mapWrap.className = "marker-wrap";
    mapMarker.className = "map-marker";
    markerTail.className = "marker-tail";
    // mapMarker.innerHTML = '<span>here<ion-icon name="cafe"></ion-icon></span>';
    mapMarker.innerHTML = '<ion-icon name="cafe"></ion-icon>';

    mapWrap.appendChild(mapMarker);
    mapWrap.appendChild(markerTail);

    const marker = new AdvancedMarkerElement({
        map,
        position: { lat: 35.158610, lng: 129.064220 },
        content: mapWrap,
    });

    marker.markerWrapElement = mapWrap;

    for (const property of properties) {
        const markerElement = new google.maps.marker.AdvancedMarkerElement({
            map,
            content: buildContent(property),
            position: property.position,
            title: property.description,
        });

        markerElement.markerWrapElement = mapWrap;

        markerElement.addListener("click", () => {
            toggleHighlight(markerElement, property);
        });
    }
}

function toggleHighlight(markerView, property) {
    const markerWrapElement = markerView.markerWrapElement;

    if (markerView.content.classList.contains("highlight")) {
        markerView.content.classList.remove("highlight");
        if (markerWrapElement) markerWrapElement.classList.remove("highlight");
        markerView.zIndex = null;
    } else {
        markerView.content.classList.add("highlight");
        if (markerWrapElement) markerWrapElement.classList.add("highlight");
        markerView.zIndex = 1;
    }
}

function buildContent(property) {
    const content = document.createElement("div");
    content.classList.add("property");
    content.innerHTML = `
    <div class="highlight">
        <div class="hl_wrap">
            <div class="map_image">
                <img src="${property.images}" alt="">
            </div>
            <div class="map_text">
                <h6 class="map_title">${property.title}</h6>
                <p class="map_sub">${property.subTitle}</p>
                <p class="map_add">${property.address}</p>
                <p class="map_enadd">${property.enAddress}</p>
            </div>
        </div>
    </div>
    `;
    return content;
}

const properties = [
    {
        images: "../images/map_img.png",
        title: "radiance",
        subTitle: "래디언스",
        address: "부산광역시 부산진구 서전로 37번길 18 2F",
        enAddress: "Busanjin-gu Seojeon-rop 37Beon-gil 18 2F",
        position: {
            lat: 35.158610,
            lng: 129.064220,
        },
    }
];

initMap();
setTimeout(replaceStreetViewIcons, 1000);
