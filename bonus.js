import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function Bonus({ route, navigation }) {
    const { itemId, otherParam } = route.params;

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Text>ItemId: {itemId}</Text>,
        });
    }, [navigation, itemId]);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go to Details... again"
                onPress={() =>
                    navigation.push('Details', {
                        itemId: Math.floor(Math.random() * 100),
                    })
                }
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default Bonus;