import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { log } from 'react-native-reanimated';

const SearchScreen = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder="Search" 
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'grey',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        fontSize: 18,
        color: 'white'
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
        color: 'white'
    }

});

export default SearchScreen;