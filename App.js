import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Config from './config.json';
import Weather from './Weather';

const API_KEY = Config.API_KEY;

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        let coords = position.coords;
        this._getWeather(coords.latitude, coords.longitude)
    },
    error => {
      this.setState({
        error: error
      })
    });
  }

  _getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true
      });
    });
  }
  
  render() {
    const { isLoaded, error } = this.state;  // equals: const isLoaded = this.state.isLoaded;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
            <Weather />
          ) : (
            <View style={styles.loading}>
              <Text style={styles.loadingText}>Now Loading...</Text>
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading: {
    flex:1,
    backgroundColor: "#b3d7fc",
    justifyContent: "flex-end",
    paddingLeft: 44
  },
  loadingText: {
    fontSize: 33,
    marginBottom: 120
  }
});
