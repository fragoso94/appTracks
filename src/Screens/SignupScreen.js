import React, {useContext} from 'react';
import {StyleSheet, View, ToastAndroid} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext} from "../Context/AuthContext";
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";

const SignupScreen = ({navigation})=>
{
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    //console.log(signup)

    return (
           <View style={styles.container}>
               <NavigationEvents
                   onWillBlur={ clearErrorMessage }
               />
                <AuthForm
                    headerText = "Sign up for Tracker"
                    holderTextOne = "Add Email"
                    holderTextTwo = "Add Password"
                    errorMessage = {state.errorMessage}
                    buttonText = "Sign Up"
                    onSubmit = {signup}
                />
                <NavLink
                    text = "Already have an account? Sign in instead."
                    routeName = "Signin"
                />

           </View>
    );
};

SignupScreen.navigationOptions = () =>{
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

export default SignupScreen;