import React from 'react';
import { StyleSheet, Text } from 'react-native'

export default class Toolbar extends React.Component {
  render() {
    return (
      <Text
        style={styles.toolbar}
      >
        Institutos Misioneros LSM
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#009688',
    color: 'white',
    padding: 16,
    paddingTop: 20+16,
    fontSize: 20
  },
});
