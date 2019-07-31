import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types';

import styles from './style'

class NextQuoteButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}> Next </Text>
      </TouchableOpacity>
    )
  }
}

NextQuoteButton.propTypes = {
  onPress: PropTypes.func.isRequired
}

