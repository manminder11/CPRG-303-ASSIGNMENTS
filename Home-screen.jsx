import React from 'react';
import { View, Button } from 'react-native';

function HomeScreen({ navigation }) {
    // ...

    return (
        <View>
            {/* ... */}

            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
          
            {/* ... */}
        </View>
    );
}