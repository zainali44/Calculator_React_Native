import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function DetailsScreen() {
  const [inputValue, setInputValue] = useState('');
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>Details Screen</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Enter ItemId"
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
      />
      <Button
        title="Submit"
        onPress={() => {
          /* 1. Navigate to the Bonus route with params */
          navigation.navigate('Bonus', {
            itemId: inputValue,
            otherParam: 'anything you want here',
          });
        }}
      />
      <Button
        title="Go to Third Screen"
        onPress={() => navigation.navigate('Third Screen')}
      />
      <Button
        title="Go to Same Screen"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

export default DetailsScreen;
