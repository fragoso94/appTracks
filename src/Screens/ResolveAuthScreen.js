import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator} from "react-native";
import {Button} from 'react-native-elements';
import { Context as AuthContext } from "../Context/AuthContext";

const ResolveAuthScreen = ()=>{
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    },[]);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#00BCD4" />
            {/*<Button loadingStyle={styles.loading} loading/>*/}
        </View>

    );
};
const styles = StyleSheet.create({
    loading:{
        width: 100,
        height: 100,
    },
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
export default ResolveAuthScreen;