import React, {useState} from 'react';
import {View, StyleSheet} from "react-native";
import {Text, Input, Button} from 'react-native-elements';

function myFunction(data) {
    setTimeout(function(){
        data
    }, 3000);
}

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonText, holderTextOne, holderTextTwo})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <>
            <Text h3 style={{textAlign: 'center', marginBottom: 15}}>{headerText}</Text>
            <Input
                label="Email"
                placeholder={holderTextOne}
                value={email}
                onChangeText={setEmail}
                autoCapitalize= "none"
                autoCorrect={false}
            />
            <Input
                secureTextEntry={true}
                label="Password"
                placeholder={holderTextTwo}
                value={password}
                onChangeText={setPassword}
                autoCapitalize= "none"
                autoCorrect={false}
            />
            {
                (errorMessage) //si este valor trae algo, se mostrará en pantalla
                    ? <Text style={styles.textError}>{errorMessage}</Text>
                    : null
            }
            <Button
                buttonStyle={styles.btnStyle}
                title={ buttonText}
                onPress={ ()=> onSubmit({email, password}) }
            />
        </>
    );

};

const styles = StyleSheet.create({
    btnStyle:{
        margin:20,
        backgroundColor: '#00BCD4'
    },
    textError:{
        color: 'red',
        marginLeft: 15,
        marginTop: 10
    },
});

export default AuthForm;