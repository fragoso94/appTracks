import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../Context/TrackContext';
import {ListItem} from "react-native-elements";
import SigninScreen from "./SigninScreen";

const TrackListScreen = ({navigation})=>
{
    const { state, fetchTracks } = useContext(TrackContext);
    // console.log(state)
    return (
        <View>
            <NavigationEvents onWillFocus={fetchTracks}/>
            <FlatList
                data={state}
                keyExtractor={item => item._id }
                renderItem={
                    ({ item }) => {
                        return <TouchableOpacity onPress={
                            () => navigation.navigate('TrackDetail', { _id: item._id})
                        }>
                            <ListItem chevron title={item.name} />
                        </TouchableOpacity>
                    }
                } />
        </View>
    );
};
TrackListScreen.navigationOptions = {
    title: 'Tracks List'
}

const styles = StyleSheet.create({

})

export default TrackListScreen;