import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
})

export default styles;