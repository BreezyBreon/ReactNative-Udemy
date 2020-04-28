import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
            <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;

// Use backticks (not quotes) for string interpolation
// Generally, we create state variables in the most parent component that needs to read or change a state value
// read more on props
// read more on state
// { onChange: () => {}}