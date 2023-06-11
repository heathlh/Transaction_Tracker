import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ToDoItem({ task, handleDelete }) {
    const [completed, setCompleted] = useState(false);

    const handleComplete = () => {
        setCompleted(!completed);
    }

    return (
        <View style={styles.itemContainer}>
            <Text style={completed ? styles.completedTask : null}>{task}</Text>
            <View style={styles.buttonsContainer}>
                <Button title="Completed" onPress={handleComplete} color={completed ? "green" : null} />
                <View style={styles.space} />
                <Button title="Delete" onPress={handleDelete} color="red" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
