import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('Scott Breon');

    return (
        <View>
            <Text style={styles.header}>Enter password:</Text>
            <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(newValue) => setPassword(newValue)}
            />
            {/* <Text>My name is: {password}</Text> */}
            {password.length < 5 ? <Text>Password must be at least 5 characters</Text> : null}
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        fontSize: 40
    },
    
    input: {
        margin: 10,
        fontSize: 30,
        height: 50,
        borderColor: 'blue',
        borderWidth: 1
        
    }


});

export default TextScreen;