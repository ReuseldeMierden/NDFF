ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:28992").setExtent([133523.000000, 369208.000000, 142932.000000, 383284.000000]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gemeentelijkeeigendommen_1 = new ol.format.GeoJSON();
var features_gemeentelijkeeigendommen_1 = format_gemeentelijkeeigendommen_1.readFeatures(json_gemeentelijkeeigendommen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_gemeentelijkeeigendommen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gemeentelijkeeigendommen_1.addFeatures(features_gemeentelijkeeigendommen_1);
var lyr_gemeentelijkeeigendommen_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gemeentelijkeeigendommen_1, 
                style: style_gemeentelijkeeigendommen_1,
                popuplayertitle: 'gemeentelijke eigendommen',
                interactive: true,
                title: '<img src="styles/legend/gemeentelijkeeigendommen_1.png" /> gemeentelijke eigendommen'
            });
var format_2026Slotenbestek_2 = new ol.format.GeoJSON();
var features_2026Slotenbestek_2 = format_2026Slotenbestek_2.readFeatures(json_2026Slotenbestek_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_2026Slotenbestek_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2026Slotenbestek_2.addFeatures(features_2026Slotenbestek_2);
var lyr_2026Slotenbestek_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2026Slotenbestek_2, 
                style: style_2026Slotenbestek_2,
                popuplayertitle: '2026 Slotenbestek',
                interactive: true,
    title: '2026 Slotenbestek<br />\
    <img src="styles/legend/2026Slotenbestek_2_0.png" /> Geen onderhoud<br />\
    <img src="styles/legend/2026Slotenbestek_2_1.png" /> Sloten even jaren<br />\
    <img src="styles/legend/2026Slotenbestek_2_2.png" /> Sloten jaarlijks<br />\
    <img src="styles/legend/2026Slotenbestek_2_3.png" /> Sloten oneven jaren<br />\
    <img src="styles/legend/2026Slotenbestek_2_4.png" /> Vijver<br />\
    <img src="styles/legend/2026Slotenbestek_2_5.png" /> Wadi<br />\
    <img src="styles/legend/2026Slotenbestek_2_6.png" /> <br />\
    <img src="styles/legend/2026Slotenbestek_2_7.png" /> Krattensysteem<br />' });
var format_NDFFsoorten_3 = new ol.format.GeoJSON();
var features_NDFFsoorten_3 = format_NDFFsoorten_3.readFeatures(json_NDFFsoorten_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_NDFFsoorten_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDFFsoorten_3.addFeatures(features_NDFFsoorten_3);
var lyr_NDFFsoorten_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDFFsoorten_3, 
                style: style_NDFFsoorten_3,
                popuplayertitle: 'NDFF soorten',
                interactive: true,
    title: 'NDFF soorten<br />\
    <img src="styles/legend/NDFFsoorten_3_0.png" /> Alpenwatersalamander<br />\
    <img src="styles/legend/NDFFsoorten_3_1.png" /> Beekrombout<br />\
    <img src="styles/legend/NDFFsoorten_3_2.png" /> Bever<br />\
    <img src="styles/legend/NDFFsoorten_3_3.png" /> Bosbeekjuffer<br />\
    <img src="styles/legend/NDFFsoorten_3_4.png" /> Bruine eikenpage<br />\
    <img src="styles/legend/NDFFsoorten_3_5.png" /> Das<br />\
    <img src="styles/legend/NDFFsoorten_3_6.png" /> Gewone / Rugstreeppad<br />\
    <img src="styles/legend/NDFFsoorten_3_7.png" /> Gladde slang<br />\
    <img src="styles/legend/NDFFsoorten_3_8.png" /> Hazelworm<br />\
    <img src="styles/legend/NDFFsoorten_3_9.png" /> IJsvogel<br />\
    <img src="styles/legend/NDFFsoorten_3_10.png" /> Kleine ijsvogelvlinder<br />\
    <img src="styles/legend/NDFFsoorten_3_11.png" /> Koningsvaren<br />\
    <img src="styles/legend/NDFFsoorten_3_12.png" /> Levendbarende hagedis<br />\
    <img src="styles/legend/NDFFsoorten_3_13.png" /> Patrijs<br />\
    <img src="styles/legend/NDFFsoorten_3_14.png" /> Poelkikker<br />\
    <img src="styles/legend/NDFFsoorten_3_15.png" /> Reuzenbalsemien<br />\
    <img src="styles/legend/NDFFsoorten_3_16.png" /> Reuzenberenklauw<br />\
    <img src="styles/legend/NDFFsoorten_3_17.png" /> Teunisbloempijlstaart<br />\
    <img src="styles/legend/NDFFsoorten_3_18.png" /> <br />' });
var group_Duikers = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Duikers'});
var group_Aangelanden = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Aangelanden'});
var group_Overig = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Overig'});
var group_BraakscheAkkers = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Braaksche Akkers'});
var group_BGT = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'BGT'});

lyr_OpenStreetMap_0.setVisible(true);lyr_gemeentelijkeeigendommen_1.setVisible(true);lyr_2026Slotenbestek_2.setVisible(true);lyr_NDFFsoorten_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_gemeentelijkeeigendommen_1,lyr_2026Slotenbestek_2,lyr_NDFFsoorten_3];
lyr_gemeentelijkeeigendommen_1.set('fieldAliases', {'KADASTRALEA': 'KADASTRALEA', 'EIGENDOM_TO': 'EIGENDOM_TO', 'KADASTRALEG': 'KADASTRALEG', 'SOORTCULTUU': 'SOORTCULTUU', 'DDINGANG': 'DDINGANG', 'SOORTCULTUU_1': 'SOORTCULTUU_1', 'INDMEERCULT': 'INDMEERCULT', });
lyr_2026Slotenbestek_2.set('fieldAliases', {'MAAIEN': 'MAAIEN', 'MAAIEN_OPM': 'MAAIEN_OPM', 'MAAIEN_ZIJ': 'MAAIEN_ZIJ', 'gml_id': 'gml_id', 'Shape_Area': 'Shape_Area', 'Lengte': 'Lengte', 'Type': 'Type', 'ID': 'ID', 'MSL_AFVOER': 'MSL_AFVOER', });
lyr_NDFFsoorten_3.set('fieldAliases', {'obs_uri': 'obs_uri', 'soort_ned': 'soort_ned', 'soort_wet': 'soort_wet', 'telondrwrp': 'telondrwrp', 'telmethode': 'telmethode', 'orig_aant': 'orig_aant', 'aantal_min': 'aantal_min', 'aantal_max': 'aantal_max', 'eenheid': 'eenheid', 'centrumx': 'centrumx', 'centrumy': 'centrumy', 'area_m2': 'area_m2', 'loc_type': 'loc_type', 'vervaagd': 'vervaagd', 'datm_start': 'datm_start', 'datm_stop': 'datm_stop', 'datm_dkkng': 'datm_dkkng', 'stadium': 'stadium', 'geslacht': 'geslacht', 'gedrag': 'gedrag', 'biotoop': 'biotoop', 'doodsoorzk': 'doodsoorzk', 'verblfplts': 'verblfplts', 'substraat': 'substraat', 'syntaxon': 'syntaxon', 'opp_dkkng': 'opp_dkkng', 'protocol': 'protocol', 'detmethode': 'detmethode', 'databehrdr': 'databehrdr', 'dataeigenr': 'dataeigenr', 'kwliteit': 'kwliteit', 'srtgroepen': 'srtgroepen', 'wnb_vrl': 'wnb_vrl', 'wnb_hrl': 'wnb_hrl', 'wnb_andere': 'wnb_andere', 'ffwet1': 'ffwet1', 'ffwet2': 'ffwet2', 'ffwet3': 'ffwet3', 'rodelijst': 'rodelijst', 'zoid': 'zoid', 'sessionid': 'sessionid', });
lyr_gemeentelijkeeigendommen_1.set('fieldImages', {'KADASTRALEA': 'TextEdit', 'EIGENDOM_TO': 'TextEdit', 'KADASTRALEG': 'TextEdit', 'SOORTCULTUU': 'TextEdit', 'DDINGANG': 'TextEdit', 'SOORTCULTUU_1': 'TextEdit', 'INDMEERCULT': 'TextEdit', });
lyr_2026Slotenbestek_2.set('fieldImages', {'MAAIEN': 'TextEdit', 'MAAIEN_OPM': 'TextEdit', 'MAAIEN_ZIJ': 'TextEdit', 'gml_id': 'TextEdit', 'Shape_Area': 'TextEdit', 'Lengte': 'TextEdit', 'Type': 'TextEdit', 'ID': 'Range', 'MSL_AFVOER': 'CheckBox', });
lyr_NDFFsoorten_3.set('fieldImages', {'obs_uri': 'TextEdit', 'soort_ned': 'TextEdit', 'soort_wet': 'TextEdit', 'telondrwrp': 'TextEdit', 'telmethode': 'TextEdit', 'orig_aant': 'TextEdit', 'aantal_min': 'TextEdit', 'aantal_max': 'TextEdit', 'eenheid': 'TextEdit', 'centrumx': 'TextEdit', 'centrumy': 'TextEdit', 'area_m2': 'TextEdit', 'loc_type': 'TextEdit', 'vervaagd': 'TextEdit', 'datm_start': 'DateTime', 'datm_stop': 'DateTime', 'datm_dkkng': 'CheckBox', 'stadium': 'TextEdit', 'geslacht': 'TextEdit', 'gedrag': 'TextEdit', 'biotoop': 'TextEdit', 'doodsoorzk': 'TextEdit', 'verblfplts': 'TextEdit', 'substraat': 'TextEdit', 'syntaxon': 'TextEdit', 'opp_dkkng': 'CheckBox', 'protocol': 'TextEdit', 'detmethode': 'TextEdit', 'databehrdr': 'TextEdit', 'dataeigenr': 'TextEdit', 'kwliteit': 'TextEdit', 'srtgroepen': 'TextEdit', 'wnb_vrl': 'TextEdit', 'wnb_hrl': 'TextEdit', 'wnb_andere': 'TextEdit', 'ffwet1': 'TextEdit', 'ffwet2': 'TextEdit', 'ffwet3': 'TextEdit', 'rodelijst': 'TextEdit', 'zoid': 'TextEdit', 'sessionid': 'TextEdit', });
lyr_gemeentelijkeeigendommen_1.set('fieldLabels', {'KADASTRALEA': 'no label', 'EIGENDOM_TO': 'no label', 'KADASTRALEG': 'no label', 'SOORTCULTUU': 'no label', 'DDINGANG': 'no label', 'SOORTCULTUU_1': 'no label', 'INDMEERCULT': 'no label', });
lyr_2026Slotenbestek_2.set('fieldLabels', {'MAAIEN': 'header label - visible with data', 'MAAIEN_OPM': 'hidden field', 'MAAIEN_ZIJ': 'hidden field', 'gml_id': 'hidden field', 'Shape_Area': 'header label - visible with data', 'Lengte': 'header label - visible with data', 'Type': 'header label - visible with data', 'ID': 'hidden field', 'MSL_AFVOER': 'no label', });
lyr_NDFFsoorten_3.set('fieldLabels', {'obs_uri': 'no label', 'soort_ned': 'inline label - always visible', 'soort_wet': 'no label', 'telondrwrp': 'no label', 'telmethode': 'no label', 'orig_aant': 'no label', 'aantal_min': 'no label', 'aantal_max': 'no label', 'eenheid': 'no label', 'centrumx': 'no label', 'centrumy': 'no label', 'area_m2': 'no label', 'loc_type': 'no label', 'vervaagd': 'no label', 'datm_start': 'no label', 'datm_stop': 'no label', 'datm_dkkng': 'no label', 'stadium': 'no label', 'geslacht': 'no label', 'gedrag': 'no label', 'biotoop': 'no label', 'doodsoorzk': 'no label', 'verblfplts': 'no label', 'substraat': 'no label', 'syntaxon': 'no label', 'opp_dkkng': 'no label', 'protocol': 'no label', 'detmethode': 'no label', 'databehrdr': 'no label', 'dataeigenr': 'no label', 'kwliteit': 'no label', 'srtgroepen': 'no label', 'wnb_vrl': 'no label', 'wnb_hrl': 'no label', 'wnb_andere': 'no label', 'ffwet1': 'no label', 'ffwet2': 'no label', 'ffwet3': 'no label', 'rodelijst': 'no label', 'zoid': 'no label', 'sessionid': 'no label', });
lyr_NDFFsoorten_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});