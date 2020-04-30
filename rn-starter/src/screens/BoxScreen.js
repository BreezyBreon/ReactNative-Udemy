import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { AuthSession } from 'expo';

const BoxScreen  = () => {
    return (

        <View>
            <View style={styles.viewStyle}>
                <Text style={styles.headerStyle}>App</Text>
            </View>
            <View style={styles.textViewStyle}>
                <Text style={styles.textOneStyle}></Text>
                <Text style={styles.textTwoStyle}></Text>
                <Text style={styles.textThreeStyle}></Text>
            </View>
        </View>
    )
};



const styles = StyleSheet.create({
    viewStyle: {
        height: 100,
    },
    headerStyle: {
        borderWidth: 2,
        borderColor: "black",
        fontSize: 50,
        textAlign: "center",
        justifyContent: "center",
        flex: 1,
        ...StyleSheet.absoluteFillObject
    },
    textViewStyle: {
        flexDirection:"row",
        flex: 1,
        justifyContent: "space-between"
    },
    textOneStyle: {
        height: 100,
        width: 120,
        borderWidth: 2,
        borderColor: `rgb(255,0,0)`,
        backgroundColor: `rgba(250,0,0,0.4)`
    },
    textTwoStyle: {
        height: 100,
        width: 120,
        borderWidth: 2,
        borderColor: `rgb(0,255,0)`,
        backgroundColor: `rgba(0,255,0,0.4)`,
        marginTop: 120
    },
    textThreeStyle: {
        height: 100,
        width: 120,
        borderWidth: 2,
        borderColor: `rgb(0,0,255)`,
        backgroundColor: `rgba(0,0,255,0.4)`
    },
})



// const styles = StyleSheet.create({
//     viewStyle: {
//         borderWidth: 3,
//         borderColor: 'black',
//         // alignItems: "center"
//         // flexDirection: "row",
//         height: 200,
//         // justifyContent: "space-between",
//         // justifyContent: "space-around",
//         // justifyContent: "center",
//     },
//     textOneStyle: {
//         borderWidth: 3,
//         borderColor: 'red',
//         // marginBottom: 10,
//         // flex: 10,
//     },
//     textTwoStyle: {
//         borderWidth: 3,
//         borderColor: 'red',
//         // flex: 12,
//         // position: "absolute",
//         // top: 0,
//         // bottom: 0,
//         // left: 0,
//         // right: 0
//         // ...StyleSheet.absoluteFillObject
//     },
//     textThreeStyle: {
//         borderWidth: 3,
//         borderColor: 'red',
//         // flex: 10,
//         // alignSelf: "center"
//     },
// });

export default BoxScreen;