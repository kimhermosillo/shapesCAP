import React  from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ExpoLinksView } from '@expo/samples'
import axios from 'axios'
import { Container, Header, Tabs, Tab, ScrollableTab, H1, H2, H3 } from 'native-base'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

console.log(' GEORGE KYEEEEOHHHHSSSS')


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Workouts',
  }
 
  render() {
    return (
  
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading = 'Upper Body'>
            <Tab1 />
          </Tab>
          <Tab heading = 'Lower Body'>
            <Tab2 />
          </Tab>
          <Tab heading = 'Abdominals'>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
      
    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#aed137',
    fontSize: 20,
  },
})
