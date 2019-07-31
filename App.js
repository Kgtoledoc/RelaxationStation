/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Quote from './components/Quote';
import { tsUndefinedKeyword } from '@babel/types';

const { quotes } = require('./quotes.json');
const bg = require('./assets/bg.png')

class App extends Component {

  render() {
    const quote = quotes[1]
    return (
      <ImageBackground source={bg} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <Quote text={quote.text} source={quote.source}></Quote>
        </View>
      </ImageBackground>

    )
  }
}



const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default App;