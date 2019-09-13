import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import { withNavigation } from 'react-navigation';
import {STYLE_ELEMENT_ID} from "react-native-web/dist/exports/StyleSheet/constants";

const NavLink = ({navigation, text, routeName})=>{
    return(
        <TouchableOpacity onPress={()=> navigation.navigate(routeName)}>
            <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    textStyle:{
        color: 'blue',
        fontSize: 15,
        padding: 10
    }
});

export default withNavigation(NavLink)