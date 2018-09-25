import React from 'react'
import { Text, StyleSheet, View } from 'react-native'


export default class Tab3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#aed137',
  },
  textJournal: {
    letterSpacing: 2,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  welcomeJournal: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
})