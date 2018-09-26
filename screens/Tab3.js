import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import {  Container, Header, Content, Card, CardItem, Body, Text } from 'native-base'


export default class Tab3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
   
          
          <Content padder>
            <Card>
              <CardItem header bordered>
                <Text>Leg Slides</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                  Challenging abdominal workout. Adding some sort of plastic to your feet while planking allows you to slide each leg out, and back targetting the abdominal area. Repeat for 30 seconds at a time.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem header bordered>
                <Text>Crunches</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                  Basic crunches, do as many as you can for 30 seconds at a time.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem header bordered>
                <Text>Planking</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                        Start off in push up position, lowering down to your elbows, keeping your back straight, engaging your core muscles for 1 minute.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem header bordered>
                <Text>Bicycle</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                        Lay on back, lift legs and peddle for 30 seconds.
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
       
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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