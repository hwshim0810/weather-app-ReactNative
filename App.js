import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends Component {
  state = {
    isLoaded: false
  }
  render() {
    const { isLoaded } = this.state;  // equals: const isLoaded = this.state.isLoaded;
    return (
      <View style={styles.container}>
        {isLoaded ? null : (
            <View style={styles.loading}>
              <Text style={styles.loadingText}>Now Loading...</Text>
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
