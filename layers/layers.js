var wms_layers = [];

var format_buildtingmap2018_region_0 = new ol.format.GeoJSON();
var features_buildtingmap2018_region_0 = format_buildtingmap2018_region_0.readFeatures(json_buildtingmap2018_region_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildtingmap2018_region_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildtingmap2018_region_0.addFeatures(features_buildtingmap2018_region_0);
var lyr_buildtingmap2018_region_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buildtingmap2018_region_0, 
                style: style_buildtingmap2018_region_0,
                interactive: true,
                title: '<img src="styles/legend/buildtingmap2018_region_0.png" /> buildtingmap2018_region'
            });

lyr_buildtingmap2018_region_0.setVisible(true);
var layersList = [lyr_buildtingmap2018_region_0];
lyr_buildtingmap2018_region_0.set('fieldAliases', {'gid': 'gid', 'asset_id': 'asset_id', 'building_a': 'building_a', });
lyr_buildtingmap2018_region_0.set('fieldImages', {'gid': '', 'asset_id': '', 'building_a': '', });
lyr_buildtingmap2018_region_0.set('fieldLabels', {'gid': 'inline label', 'asset_id': 'inline label', 'building_a': 'inline label', });
lyr_buildtingmap2018_region_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});