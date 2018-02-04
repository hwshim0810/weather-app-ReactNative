import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';


export default class Weather extends Component {
    render() {
        return (
            // Expo component : multiple color load
            <LinearGradient 
                colors={["#00C6FB", "#005BEA"]} 
                style={styles.container}
            >
                <View style={styles.upper}>
                    <Ionicons color="white" size={144} name="ios-rainy" />
                    <Text style={styles.temp}>22°</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>It's raining</Text>
                    <Text style={styles.subtitle}>Shit</Text>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        fontWeight: "300",
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 12
    },
    subtitle: {
        fontSize: 22,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 22
    }
})