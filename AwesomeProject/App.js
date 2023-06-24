import React from 'react';
import {View,Text,SafeAreaView} from 'react-native';

import KeyPad from './components/StackDemo';

const App = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <Text style={{textAlign:'center',fontSize:40}}>Hang Liao Project 1</Text>
            <KeyPad/>
        </SafeAreaView>
    )
}
export default App
