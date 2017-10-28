import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'

import Touchable from '../lib/Touchable'
import FB from '../lib/FB'

export default class Row extends React.Component {
  render() {
    return (
      <Touchable
        onPress={() => FB.openPage(this.props.instituto.facebookId)}
      >
        <View
          style={styles.row}
        >
          <Image
            style={styles.image}
            source={{uri: 'https://graph.facebook.com/v2.10/'+this.props.instituto.facebookId+'/picture?width=120&height=120'}}
          />
          <View
            style={[styles.text, this.props.instituto.name ? styles.text2 : styles.text1]}
          >
            <Text
              style={styles.key}
            >
              {this.props.instituto.key}
            </Text>
            {this.props.instituto.name ?
              <Text
              numberOfLines={1}
              style={styles.name}
              >
              {this.props.instituto.name}
              </Text>
            : undefined}
          </View>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  key: {
    fontSize: 16,
  },
  text: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 72,
    paddingRight: 16,
  },
  text1: {
    height: 56,
  },
  text2: {
    height: 72,
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 16,
    marginRight: 16,
  },
  name: {
    color: 'gray',
    fontSize: 14
  },
});
