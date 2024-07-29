ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32628").setExtent([270114.790668, 1631794.409669, 272785.998979, 1634826.446522]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Boncomportement_1 = new ol.format.GeoJSON();
var features_Boncomportement_1 = format_Boncomportement_1.readFeatures(json_Boncomportement_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_Boncomportement_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boncomportement_1.addFeatures(features_Boncomportement_1);
var lyr_Boncomportement_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boncomportement_1, 
                style: style_Boncomportement_1,
                popuplayertitle: "Bon comportement",
                interactive: true,
                title: '<img src="styles/legend/Boncomportement_1.png" /> Bon comportement'
            });
var format_Anomalies_2 = new ol.format.GeoJSON();
var features_Anomalies_2 = format_Anomalies_2.readFeatures(json_Anomalies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_Anomalies_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anomalies_2.addFeatures(features_Anomalies_2);
var lyr_Anomalies_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anomalies_2, 
                style: style_Anomalies_2,
                popuplayertitle: "Anomalies",
                interactive: true,
                title: '<img src="styles/legend/Anomalies_2.png" /> Anomalies'
            });
var format_Solnu_3 = new ol.format.GeoJSON();
var features_Solnu_3 = format_Solnu_3.readFeatures(json_Solnu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_Solnu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solnu_3.addFeatures(features_Solnu_3);
var lyr_Solnu_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solnu_3, 
                style: style_Solnu_3,
                popuplayertitle: "Sol nu",
                interactive: true,
                title: '<img src="styles/legend/Solnu_3.png" /> Sol nu'
            });
var format_test_4 = new ol.format.GeoJSON();
var features_test_4 = format_test_4.readFeatures(json_test_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_test_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test_4.addFeatures(features_test_4);
var lyr_test_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_test_4, 
                style: style_test_4,
                popuplayertitle: "test",
                interactive: true,
                title: '<img src="styles/legend/test_4.png" /> test'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Boncomportement_1.setVisible(true);lyr_Anomalies_2.setVisible(true);lyr_Solnu_3.setVisible(true);lyr_test_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Boncomportement_1,lyr_Anomalies_2,lyr_Solnu_3,lyr_test_4];
lyr_Boncomportement_1.set('fieldAliases', {'VALUE': 'VALUE', });
lyr_Anomalies_2.set('fieldAliases', {'VALUE': 'VALUE', });
lyr_Solnu_3.set('fieldAliases', {'VALUE': 'VALUE', });
lyr_test_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'Culture': 'Culture', 'varietes': 'varietes', 'Superficie': 'Superficie', });
lyr_Boncomportement_1.set('fieldImages', {'VALUE': 'TextEdit', });
lyr_Anomalies_2.set('fieldImages', {'VALUE': 'TextEdit', });
lyr_Solnu_3.set('fieldImages', {'VALUE': 'TextEdit', });
lyr_test_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nom': 'TextEdit', 'Culture': 'TextEdit', 'varietes': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_Boncomportement_1.set('fieldLabels', {'VALUE': 'no label', });
lyr_Anomalies_2.set('fieldLabels', {'VALUE': 'no label', });
lyr_Solnu_3.set('fieldLabels', {'VALUE': 'no label', });
lyr_test_4.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Culture': 'inline label - always visible', 'varietes': 'inline label - always visible', 'Superficie': 'inline label - always visible', });
lyr_test_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});