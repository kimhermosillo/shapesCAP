import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import {  Container, Header, Content, Card, CardItem, Body, Text } from 'native-base'


export default class Tab1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        
          <Content padder>
            <Card>
              <CardItem header bordered>
                <Text>Wall Balls</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                  Wall balls are amazing for shoulders! Grab any size weighted ball (whatevers comfortable but somewhat tough for you) then throw it up at all wall, then catch. Repeat for 20 times.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem header bordered>
                <Text>Incline Hammer Curls</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                  On a seated incline bench with a dumbbell in each hand (at whatever weight is challenging for you) and allow them to hang straight down at your side. Initiate by flexing at the elbow, keeping your upper arm stationary. Continue this movement about 12-15 times.                  
                  </Text>
                </Body>
              </CardItem>
            </Card><Card>
              <CardItem header bordered>
                <Text>Kettle Raises - Arm</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                  Working each arm seperately, a kettlebell at your choice of weight. Squating down, the kettlebell touching the floor, stand up, then raise the kettlebell to the sky. Repeat about 12-15 times.
                  </Text>
                </Body>
              </CardItem>
            </Card><Card>
              <CardItem header bordered>
                <Text>Incline Hammer Curls</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                  On a seated incline bench with a dumbbell in each hand (at whatever weight is challenging for you) and allow them to hang straight down at your side. Initiate by flexing at the elbow, keeping your upper arm stationary. Continue this movement about 12-15 times.
                  </Text>
                </Body>
              </CardItem>
            </Card><Card>
              <CardItem header bordered>
                <Text>Dips</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                  Dips workout your tricep area! On parallel bars, jump up, straighten your arms and then lower your body by bending your elbows while leaning forward. This may take time to properly dip down until your shoulders are parallel with your elbows. Lift your body back up, that`s a dip! Repeat 12-15 times.
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