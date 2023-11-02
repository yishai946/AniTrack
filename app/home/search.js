import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const search = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Search</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default search