import '../Screens/fakeLocation';
import React, {useContext, useCallback} from 'react';
import {StyleSheet } from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import Map from "../Components/Map";
import { Context as LocationContext } from '../Context/LocationContext';
import useLocation from "../hooks/useLocation";
import TrackForm from "../Components/trackForm";
import { FontAwesome} from '@expo/vector-icons';

const TrackCreateScreen= ({isFocused})=>
{
    const { state: { recording }, addLocation } = useContext(LocationContext);

    const callback = useCallback(location => {
        addLocation(location, recording);
    }, [recording]);

    const [error] = useLocation(isFocused || recording , callback);

    console.log("estoy en el mapa.?-->",isFocused); //muestra true si estamos en la vista de esta pantalla
    let message = <Text>Porfavor habilita los servicios de localización</Text>
    return (
        <SafeAreaView>
            <Text h2>Create a track</Text>
            <Map/>
            {/*<NavigationEvents onWillBlur={()=> console.log('SALIENDO')} />*/}
            { error ? message : null}
            <TrackForm/>
        </SafeAreaView>
    );
};
TrackCreateScreen.navigationOptions = {
    title: 'Add Tracks',
    tabBarIcon: <FontAwesome name="plus" size={15}/>
};


const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);