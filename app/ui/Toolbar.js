import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native'

export default class Toolbar extends React.Component {
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="#ff0000"
          barStyle="light-content"
        />
        <Text
          style={styles.toolbar}
        >
          Institutos Misioneros LSM
        </Text>
      </View>
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
