var map;
/*require(["esri/map", "dojo/domReady!"], function (Map) {
    map = new Map("mapDiv", {
        center: [-56.049, 38.485],
        zoom: 3,
        basemap: "streets"
    });
});*/

/*require(["esri/map",
    "esri/arcgis/utils",
    "esri/dijit/Legend",
    "dojo/domReady!"
], function (Map, arcgisUtils, Legend) {
    arcgisUtils.createMap("1a40fa5cc1ab4569b79f45444d728067", "mapDiv").then(function (response) {
        map = response.map;

        var legend = new Legend({
            map: map,
            layInfos: (arcgisUtils.getLegendLayers(response))
        }, "legendDiv");
        legend.startup();
    });   
});*/

require([
    "esri/map",
    "esri/dijit/Directions",
    "dojo/parser",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "dojo/domReady!"
], function (Map, Directions, parser) {

    map = new Map("mapDiv", {
        center: [-56.049, 38.485],
        basemap: 'streets',
        zoom: 3
    });

    // call the parser
    parser.parse();
    // additional code to create a map and directions widget
    var directions = new Directions({
        map: map,
        routeTaskUrl:"http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Network/USA/NAServer/Route"
    }, "dir");

    directions.startup();
});