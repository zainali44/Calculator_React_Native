import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={
          {
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black'
          }
        
        }>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Go to Same Screen"
            onPress={() => navigation.push('First Name')}
        />
      </View>
    );
  }

export default HomeScreen;