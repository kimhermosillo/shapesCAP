import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { H1, H2, H3 } from 'native-base'


export default class Tab2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>
            <H1>name: "Calf Raises" </H1>
description: "Stand on a flat ground, and go on your tippy toes. You could add weights if you`d like.",
          </Text>
        </ScrollView>
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