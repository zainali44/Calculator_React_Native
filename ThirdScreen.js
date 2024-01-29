import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function ThirdScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={
          {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black'
          }
        
        }>Details Screen</Text>
        <Button
          title="Go to pervious Screen"
            onPress={() => navigation.goBack()}
        />
        <Button
          title="Go to First Screen"
            onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }

export default ThirdScreen;