ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:28992").setExtent([133909.319000, 369520.071000, 142267.963000, 382012.838000]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2026Slotenbestek_1 = new ol.format.GeoJSON();
var features_2026Slotenbestek_1 = format_2026Slotenbestek_1.readFeatures(json_2026Slotenbestek_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_2026Slotenbestek_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2026Slotenbestek_1.addFeatures(features_2026Slotenbestek_1);
var lyr_2026Slotenbestek_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2026Slotenbestek_1, 
                style: style_2026Slotenbestek_1,
                popuplayertitle: '2026 Slotenbestek',
                interactive: true,
    title: '2026 Slotenbestek<br />\
    <img src="styles/legend/2026Slotenbestek_1_0.png" /> Geen onderhoud<br />\
    <img src="styles/legend/2026Slotenbestek_1_1.png" /> Sloten even jaren<br />\
    <img src="styles/legend/2026Slotenbestek_1_2.png" /> Sloten jaarlijks<br />\
    <img src="styles/legend/2026Slotenbestek_1_3.png" /> Sloten oneven jaren<br />\
    <img src="styles/legend/2026Slotenbestek_1_4.png" /> Vijver<br />\
    <img src="styles/legend/2026Slotenbestek_1_5.png" /> Wadi<br />\
    <img src="styles/legend/2026Slotenbestek_1_6.png" /> <br />\
    <img src="styles/legend/2026Slotenbestek_1_7.png" /> Krattensysteem<br />' });
var format_SelectieNDFF_2 = new ol.format.GeoJSON();
var features_SelectieNDFF_2 = format_SelectieNDFF_2.readFeatures(json_SelectieNDFF_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_SelectieNDFF_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SelectieNDFF_2.addFeatures(features_SelectieNDFF_2);
var lyr_SelectieNDFF_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SelectieNDFF_2, 
                style: style_SelectieNDFF_2,
                popuplayertitle: 'Selectie NDFF',
                interactive: true,
                title: '<img src="styles/legend/SelectieNDFF_2.png" /> Selectie NDFF'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_2026Slotenbestek_1.setVisible(true);lyr_SelectieNDFF_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2026Slotenbestek_1,lyr_SelectieNDFF_2];
lyr_2026Slotenbestek_1.set('fieldAliases', {'MAAIEN': 'MAAIEN', 'MAAIEN_OPM': 'MAAIEN_OPM', 'MAAIEN_ZIJ': 'MAAIEN_ZIJ', 'gml_id': 'gml_id', 'Shape_Area': 'Shape_Area', 'Lengte': 'Lengte', 'Type': 'Type', 'ID': 'ID', 'MSL_AFVOER': 'MSL_AFVOER', });
lyr_SelectieNDFF_2.set('fieldAliases', {'obs_uri': 'obs_uri', 'soort_ned': 'soort_ned', 'soort_wet': 'soort_wet', 'telondrwrp': 'telondrwrp', 'telmethode': 'telmethode', 'orig_aant': 'orig_aant', 'aantal_min': 'aantal_min', 'aantal_max': 'aantal_max', 'eenheid': 'eenheid', 'centrumx': 'centrumx', 'centrumy': 'centrumy', 'area_m2': 'area_m2', 'loc_type': 'loc_type', 'vervaagd': 'vervaagd', 'datm_start': 'datm_start', 'datm_stop': 'datm_stop', 'datm_dkkng': 'datm_dkkng', 'stadium': 'stadium', 'geslacht': 'geslacht', 'gedrag': 'gedrag', 'biotoop': 'biotoop', 'doodsoorzk': 'doodsoorzk', 'verblfplts': 'verblfplts', 'substraat': 'substraat', 'syntaxon': 'syntaxon', 'opp_dkkng': 'opp_dkkng', 'protocol': 'protocol', 'detmethode': 'detmethode', 'databehrdr': 'databehrdr', 'dataeigenr': 'dataeigenr', 'kwliteit': 'kwliteit', 'srtgroepen': 'srtgroepen', 'wnb_vrl': 'wnb_vrl', 'wnb_hrl': 'wnb_hrl', 'wnb_andere': 'wnb_andere', 'ffwet1': 'ffwet1', 'ffwet2': 'ffwet2', 'ffwet3': 'ffwet3', 'rodelijst': 'rodelijst', 'zoid': 'zoid', 'sessionid': 'sessionid', });
lyr_2026Slotenbestek_1.set('fieldImages', {'MAAIEN': 'TextEdit', 'MAAIEN_OPM': 'TextEdit', 'MAAIEN_ZIJ': 'TextEdit', 'gml_id': 'TextEdit', 'Shape_Area': 'TextEdit', 'Lengte': 'TextEdit', 'Type': 'TextEdit', 'ID': 'Range', 'MSL_AFVOER': 'CheckBox', });
lyr_SelectieNDFF_2.set('fieldImages', {'obs_uri': 'TextEdit', 'soort_ned': 'TextEdit', 'soort_wet': 'TextEdit', 'telondrwrp': 'TextEdit', 'telmethode': 'TextEdit', 'orig_aant': 'TextEdit', 'aantal_min': 'TextEdit', 'aantal_max': 'TextEdit', 'eenheid': 'TextEdit', 'centrumx': 'TextEdit', 'centrumy': 'TextEdit', 'area_m2': 'TextEdit', 'loc_type': 'TextEdit', 'vervaagd': 'TextEdit', 'datm_start': 'DateTime', 'datm_stop': 'DateTime', 'datm_dkkng': 'CheckBox', 'stadium': 'TextEdit', 'geslacht': 'TextEdit', 'gedrag': 'TextEdit', 'biotoop': 'TextEdit', 'doodsoorzk': 'TextEdit', 'verblfplts': 'TextEdit', 'substraat': 'TextEdit', 'syntaxon': 'TextEdit', 'opp_dkkng': 'CheckBox', 'protocol': 'TextEdit', 'detmethode': 'TextEdit', 'databehrdr': 'TextEdit', 'dataeigenr': 'TextEdit', 'kwliteit': 'TextEdit', 'srtgroepen': 'TextEdit', 'wnb_vrl': 'TextEdit', 'wnb_hrl': 'TextEdit', 'wnb_andere': 'TextEdit', 'ffwet1': 'TextEdit', 'ffwet2': 'TextEdit', 'ffwet3': 'TextEdit', 'rodelijst': 'TextEdit', 'zoid': 'TextEdit', 'sessionid': 'TextEdit', });
lyr_2026Slotenbestek_1.set('fieldLabels', {'MAAIEN': 'header label - visible with data', 'MAAIEN_OPM': 'hidden field', 'MAAIEN_ZIJ': 'hidden field', 'gml_id': 'hidden field', 'Shape_Area': 'header label - visible with data', 'Lengte': 'header label - visible with data', 'Type': 'header label - visible with data', 'ID': 'hidden field', 'MSL_AFVOER': 'no label', });
lyr_SelectieNDFF_2.set('fieldLabels', {'obs_uri': 'no label', 'soort_ned': 'inline label - always visible', 'soort_wet': 'no label', 'telondrwrp': 'no label', 'telmethode': 'no label', 'orig_aant': 'no label', 'aantal_min': 'no label', 'aantal_max': 'no label', 'eenheid': 'no label', 'centrumx': 'no label', 'centrumy': 'no label', 'area_m2': 'no label', 'loc_type': 'no label', 'vervaagd': 'no label', 'datm_start': 'no label', 'datm_stop': 'no label', 'datm_dkkng': 'no label', 'stadium': 'no label', 'geslacht': 'no label', 'gedrag': 'no label', 'biotoop': 'no label', 'doodsoorzk': 'no label', 'verblfplts': 'no label', 'substraat': 'no label', 'syntaxon': 'no label', 'opp_dkkng': 'no label', 'protocol': 'no label', 'detmethode': 'no label', 'databehrdr': 'no label', 'dataeigenr': 'no label', 'kwliteit': 'no label', 'srtgroepen': 'no label', 'wnb_vrl': 'no label', 'wnb_hrl': 'no label', 'wnb_andere': 'no label', 'ffwet1': 'no label', 'ffwet2': 'no label', 'ffwet3': 'no label', 'rodelijst': 'no label', 'zoid': 'no label', 'sessionid': 'no label', });
lyr_SelectieNDFF_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});