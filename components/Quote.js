import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';


class Quote extends Component {

  render() {
    const text = this.props.text;
    const source = this.props.source
    return (
      <View>
        <Text>{text}</Text>
        <Text>{source}</Text>
      </View>

    )
  }
}

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
}

export default Quote;