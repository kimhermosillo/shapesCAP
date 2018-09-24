import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ExpoLinksView } from '@expo/samples'

const Shapes = ({ shapes }) => {

  const targetAreas = shapes.map(shape => {
    console.log(shape)
    return (
      <Text>
        { shape.targetarea }
      </Text>
    )
  })
  return (
    <View>
      { targetAreas }
    </View>
  )
}

export default Shapes