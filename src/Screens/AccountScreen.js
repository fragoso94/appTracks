import React, { useContext } from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-elements';
import { Context as AuthContext} from "../Context/AuthContext";
import { SafeAreaView } from 'react-navigation';
import { FontAwesome} from '@expo/vector-icons';

const AccountScreen = ()=>
{
    const { signout } = useContext(AuthContext )
    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text h2 style={{textAlign: 'center'}}> Account Screen</Text>
            <Button
                buttonStyle={styles.btnStyle}
                title= "Sign Out"
                onPress={signout}
            />
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={15}/>
};


const styles = StyleSheet.create({
    btnStyle:{
        margin: 20,
        marginVertical: 30
    }
});

export default AccountScreen;