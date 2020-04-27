var marker_layers = {
    
    "Blue Markers": L.layerGroup([
        L.marker([51.5, -0.09], {icon: icons["blue"]}).bindPopup("<b>Blue Marker</b><br>Hello World"),
        L.marker([51.3, -0.20], {icon: icons["blue"]}).bindPopup("<b>Blue Marker</b><br>Hello World"),
        L.marker([51.4, -0.09], {icon: icons["blue"]}).bindPopup("<b>Blue Marker</b><br>Hello World"),
    ]),
    
    "Other Markers": L.layerGroup([
        L.marker([51.5, 0.01], {icon: icons["red"]}).bindPopup("<b>Red Marker</b><br>Link example<br><a href=\"#\">Link to somewhere</a>"),
        L.marker([51.3, -0.09], {icon: icons["black"]}).bindPopup("<b>Black Marker</b><br>Image example<br><img src=\"boat.png\" style=\"width:200px;height:200px;\">"),
        L.marker([51.4, -0.19], {icon: icons["green"]}).bindPopup("<b>Anything Marker</b><br>Marker popups can display anything!<br><iframe width=\"200\" height=\"200\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"),
    ]),
    
    "Postcode Markers": L.layerGroup([
        L.marker([55.908949, -3.218349], {icon: icons["red"]}).bindPopup("<b>These</b><br>EH13 9JR<br><a href=\"#\">A</a>"),
        L.marker([55.906123, -3.252812], {icon: icons["black"]}).bindPopup("<b>Markers</b><br>EH13 0BD<br><a href=\"..\">AA</a>"),
        L.marker([55.904593, -3.251291], {icon: icons["blue"]}).bindPopup("<b>Are</b><br>EH13 0BE<br><a href=\"http://fiftysix.scot\">AAA</a>"),
        L.marker([55.933029, -3.237369], {icon: icons["red"]}).bindPopup("<b>Located</b><br>EH13 0BF<br><a href=\"/\">AAAA</a>"),
        L.marker([55.905037, -3.250025], {icon: icons["green"]}).bindPopup("<b>Using</b><br>EH13 0BG<br><a href=\"boat.png\">AAAAA</a>"),
        L.marker([55.907218, -3.251135], {icon: icons["blue"]}).bindPopup("<b>Postcodes</b><br>EH13 0BH<br><a href=\"marker-blue.png\">AAAAAA</a>"),
        L.marker([55.907618, -3.251596], {icon: icons["red"]}).bindPopup("<b>!</b><br>EH13 0BJ<br><a href=\"marker-red.png\">AAAAAAA</a>"),
        L.marker([55.905965, -3.248024], {icon: icons["red"]}).bindPopup("<b>red</b><br>EH13 0BL<br><a href=\"marker-black.png\">AAAAAAAA</a>"),
        L.marker([55.905394, -3.248948], {icon: icons["green"]}).bindPopup("<b>green</b><br>EH13 0BN<br><a href=\"marker-green.png\">AAAAAAAAA</a>"),

    ]),
}

