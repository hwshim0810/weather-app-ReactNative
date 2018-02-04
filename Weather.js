import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import weatherCases from './data/WeatherCases.json'


function Weather({ areaName, weatherName, temp }) {
    if (weatherName in weatherCases) {
        return (
            <LinearView 
                areaName={areaName} 
                weatherName={weatherName} 
                temp={temp} />
        );
    } else {
        return (
            <ErrorView />
        );
    }
}

function LinearView({ areaName, weatherName, temp }) {
    return (
        // Expo component : multiple color load
        <LinearGradient 
            colors={weatherCases[weatherName].colors} 
            style={styles.container}
        >
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.area}>{areaName}</Text>
                <Text style={styles.temp}>{ temp }°</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

function ErrorView() {
    return (
        <LinearGradient 
            colors={["#D7D2CC", "#304352"]} 
            style={styles.container}
        >
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name="alert-outline" />
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>Don't know weather name...</Text>
                <Text style={styles.subtitle}>Move to another area</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

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
    area: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    temp: {
        fontSize: 35,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 20
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