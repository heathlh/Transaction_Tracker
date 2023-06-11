import React from 'react';
import {View,Text} from 'react-native';

import KeyPad from './components/StackDemo';

const App = () => {
    return (
        <View style={{flex:1}}>
            <Text style={{textAlign:'center',fontSize:40}}>Hang Liao Project 1</Text>
            <KeyPad/>
        </View>

    )
}
export default App
