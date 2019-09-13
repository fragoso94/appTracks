import React, { useContext } from 'react';
import {StyleSheet, ActivityIndicator } from "react-native";
import MapView, {Polyline, Circle} from 'react-native-maps';
import {Context as LocationContext } from '../Context/LocationContext';

const Map = ()=>{
    /*const marcarPuntosMap= () =>{
        let points = [];
        for (let i=0; i<20; i++){
            if(i % 2 === 0){
                points.push({
                    latitude: 16.7525415 + i * 0.001,
                    longitude: -93.1086113 + i * 0.001
                });
            }else {
                points.push({
                    latitude: 16.7525415 - i * 0.002,
                    longitude: -93.1086113 + i * 0.001
                });
            }
            console.log(points);
        }
    };*/
    const { state: { currentLocation, locations } } = useContext(LocationContext);
    // console.log(state);
    //console.log(locations)
    if(!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop: 200}}/>
    }

    return(
       <MapView
           style={styles.map}
           initialRegion={
               {
                   ...currentLocation.coords,
                   latitudeDelta: 0.01,
                   longitudeDelta: 0.01
               }
           }
           region={{
               ...currentLocation.coords,
               latitudeDelta: 0.01,
               longitudeDelta: 0.01
           }}
       >
           {/*<Polyline coordinates={points}/>*/}
           <Circle
             center={ currentLocation.coords }
             radius={30}
             strokeColor = "rgba(158,158,255, 1.0)"
             fillColor = "rgba(158, 158, 255, 0.3)"
           />
           <Polyline coordinates={locations.map(loc => loc.coords)}/>
       </MapView>
    )
};

const styles = StyleSheet.create({
    map:{
        height: 300
    }
});
export default Map;
