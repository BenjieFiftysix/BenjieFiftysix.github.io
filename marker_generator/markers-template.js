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
{markers}
    ]),
}

