import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";
import {Context as AuthContext } from '../Context/AuthContext';

const SigninScreen = ()=>
{
    const {state, signin, clearErrorMessage} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={ clearErrorMessage }
            />
            <AuthForm
                headerText = "Sign In to Your Account"
                holderTextOne = "Set Email"
                holderTextTwo = "Set Password"
                errorMessage = {state.errorMessage}
                buttonText = "Sign In"
                onSubmit = {signin}
            />
            <NavLink
                text = "Don´t have an account? Go back to sign up."
                routeName = "Signup"
            />
        </View>
    );
};

SigninScreen.navigationOptions = () =>{
    return{
        header: null
    }
}

const styles = StyleSheet.create({
    container:{
        margin: 15,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SigninScreen;