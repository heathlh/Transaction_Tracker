import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function ToDoItem({ task, handleDelete }) {
    const [completed, setCompleted] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleComplete = () => {
        setCompleted(!completed);
    }

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        } else {
            alert('You did not select any image.');
        }
    };

    const handleDeleteImage = () => {
        setSelectedImage(null);
    }

    return (
        <SafeAreaView style={styles.itemContainer}>
            <View style={styles.textImageRow}>
                <Text style={completed ? styles.completedTask : null}>{task}</Text>
                {selectedImage && (
                    <Image
                        source={{ uri: selectedImage }}
                        style={{ width: 50, height: 50 }}
                    />
                )}
            </View>
            <View style={styles.buttonsContainer}>
                <Button title="Done" onPress={handleComplete} color={completed ? "green" : null} />
                <View style={styles.space} />
                <Button title="Delete" onPress={handleDelete} color="red" />
                <View style={styles.space} />
                <Button title="Image" onPress={pickImageAsync} color="purple" />
                <View style={styles.space} />
                {selectedImage && <Button title="DeleteImage" onPress={handleDeleteImage} color="red" />}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    textImageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    space: {
        width: 20,
    },
    completedTask: {
        textDecorationLine: 'line-through',
        color: 'green',
    },
});

export default ToDoItem;
