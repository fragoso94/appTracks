import { useState, useEffect} from 'react';
import {Accuracy, requestPermissionsAsync, watchPositionAsync} from 'expo-location';

export default (shouldTrack, callback) => {
    const [error, setError] = useState(null); //se pide permiso

    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try{
                await requestPermissionsAsync();
                subscriber = await watchPositionAsync({
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval: 10
                    },
                    callback
                );
            }catch (e) {
                setError(e); //si el usuario rechaza
            }
        };

        if (shouldTrack) //rastrear usuario
        {
            startWatching();
        }
        else{// detener rastreo
            if (subscriber){
                subscriber.remove();
            }
            subscriber = null;
        }

        return () => {
            if(subscriber){
                subscriber.remove();
            }
        };

    },[shouldTrack, callback]);

    return [error];


};