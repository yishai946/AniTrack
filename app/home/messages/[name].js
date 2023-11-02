import { View, Text } from 'react-native'
import React from 'react'
import { useGlobalSearchParams, Stack } from 'expo-router'

const messageRoom = () => {
  const {name} = useGlobalSearchParams();
  return (
    <View>
      <Stack.Screen options={{title: name}} />
      <Text style={{fontSize: 30}}>{name}</Text>
    </View>
  )
}

export default messageRoom