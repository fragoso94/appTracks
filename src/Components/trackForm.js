import React, {useContext} from 'react';
import {Input, Button} from 'react-native-elements';
import {StyleSheet, View} from "react-native";
import {Context as LocationContext} from '../Context/LocationContext';
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () =>{
    const { state: {name, recording, locations},
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);

    //console.log("Rutas en el arreglo",locations.length);
    const [saveTrack] = useSaveTrack();

    return(
        <>
            <View style={styles.container}>
                <Input
                    value={name}
                    onChangeText={changeName}
                    placeholder="Enter name tracks"
                />
                {
                    recording ? <Button buttonStyle={styles.btnStop} title="Stop Recording" onPress={stopRecording} />
                    : <Button buttonStyle={styles.btnStart} title="Start Recording" onPress={startRecording}/>
                }
                {
                    (!recording && locations.length)
                    ? <Button buttonStyle={{marginTop: 10}} title="Save recording" onPress={saveTrack} />: null
                }
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container:{
        margin: 10
    },
    btnStart:{
        marginTop: 15,
        backgroundColor: 'green'
    },
    btnStop:{
        marginTop: 15,
        backgroundColor: 'red'
    }
})

export default TrackForm;