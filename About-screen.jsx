import React from 'react';
import { Button, View } from 'react-native';

function AboutScreen({ navigation }) {
    // ...

    return (
        <View>
            {/* ... */}

            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
          
            {<AboutScreen/>}
        </View>
    );
}