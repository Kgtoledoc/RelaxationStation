import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './style'


class Quote extends Component {

  render() {
    const text = this.props.text;
    const source = this.props.source
    return (
      <View>
        <Text style={styles.quoteText}>{text}</Text>
        <Text style={styles.sourceText}>{source}</Text>
      </View>

    )
  }
}

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
}

export default Quote;