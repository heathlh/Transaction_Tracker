import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

function InputBar({ handleAdd }) {
    const [text, setText] = useState('');

    const handleChange = (inputText) => {
        setText(inputText);
    }

    return (
        <View>
            <TextInput value={text} onChangeText={handleChange} />
            <Button title="Add" onPress={() => {handleAdd(text); setText('')}} />
        </View>
    );
}

export default InputBar;
