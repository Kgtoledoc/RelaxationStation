import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  quoteContainer: {
    flex: 1,
    justifyContent: 'center',

  },
  quoteText: {
    fontFamily: (Platform.OS === 'ios') ?
      'AvenirNext-Bold' : 'Roboto',
    fontSize: 36,
    color: '#000000',
    marginVertical: 30,
  },
  sourceText: {
    fontFamily: (Platform.OS === 'ios') ?
      'AvenirNext-Bold' : 'Roboto',
    fontSize: 20,
    color: '#000000',
    textAlign: 'right',
    fontStyle: 'italic'
  },
  button: {
    borderWidth: 2,
    borderColor: '#000000',
    padding: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18
  }
})

export default styles;