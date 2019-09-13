import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Context as TrackContext} from '../Context/TrackContext';
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({navigation})=>
{
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find(tracks => tracks._id === _id);
    const initialCoords = track.locations[0].coords;
    console.log(initialCoords)
    return (
        <View>
            <Text>Name track: {track.name}</Text>
            <MapView
                style={styles.map}
               initialRegion={{
                   longitudeDelta: 0.01,
                   latitudeDelta: 0.01,
                   ...initialCoords
               }}
            >
                <Polyline coordinates={track.locations.map( loc => loc.coords)} />
            </MapView>
        </View>
    );
};

TrackDetailScreen.navigationOptions = {
    title: 'Track Detail'
}

const styles = StyleSheet.create({
    map:{
        height: 200
    }
});

export default TrackDetailScreen;