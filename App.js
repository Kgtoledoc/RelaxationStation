/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, LayoutAnimation } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Quote from './components/Quote';
import { tsUndefinedKeyword } from '@babel/types';
import NextQuoteButton from './components/NextQuoteButton'


const { quotes } = require('./quotes.json');
const bg = require('./assets/bg.png')

const tranquil = {
  duration: 500,
  create: {
    duration: 1000,
    delay: 300,
    type: LayoutAnimation.Types.easeIn,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  delete: {
    duration: 200,
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity,
  }

}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quoteIndex: 2,
    }
    this._incrementQuoteIndex = this._incrementQuoteIndex.bind(this)
  }

  // Increment the index
  _incrementQuoteIndex() {
    let newIndex;
    if (this.state.quoteIndex + 1 === quotes.length) {
      newIndex = 0
    } else {
      newIndex = this.state.quoteIndex + 1
    }
    this.setState({
      quoteIndex: newIndex
    })
  }
  componentWillUpdate() {
    LayoutAnimation.configureNext(tranquil)
  }

  render() {

    const quote = quotes[this.state.quoteIndex]
    return (
      <ImageBackground source={bg} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <Quote
            key={this.state.quoteIndex}
            text={quote.text}
            source={quote.source}></Quote>
          <NextQuoteButton onPress={this._incrementQuoteIndex}></NextQuoteButton>
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