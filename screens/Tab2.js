import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import {  Container, Header, Content, Card, CardItem, Body, Text } from 'native-base'


export default class Tab2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          
          <Content padder>
            <Card>
              <CardItem header bordered>
                <Text>Straight Deadlifts</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                  Keeping your legs straight, deadlift desired weight while keeping your back straight.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem header bordered>
                <Text>Calf Raises</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                        Stand on a flat ground, and go on your tippy toes. You could add weights if you`d like.
                  </Text>
                </Body>
              </CardItem>
            </Card><Card>
              <CardItem header bordered>
                <Text>Squats</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                  Work on your glutes! Squat down, keeping feet shoulder width apart.
                  </Text>
                </Body>
              </CardItem>
            </Card><Card>
              <CardItem header bordered>
                <Text>Lunges</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                  Lunge across the room and back with desired weight.                  
                  </Text>
                </Body>
              </CardItem>
            </Card><Card>
              <CardItem header bordered>
                <Text>Hamstring Curls</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                  Laying on a bench, add weights to your legs and curl up.
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