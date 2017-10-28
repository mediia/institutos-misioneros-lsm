import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native'

import InstitutosMisioneros from './app/data/InstitutosMisioneros'
import Row from './app/ui/Row'
import Toolbar from './app/ui/Toolbar'

export default class App extends React.Component {
  render() {
    return (
      <View
        style={styles.container}
      >
        <Toolbar/>
        <ScrollView>
          {InstitutosMisioneros.map(institutoMisionero =>
            <Row
              instituto={institutoMisionero}
              key={institutoMisionero.key}
            ></Row>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
