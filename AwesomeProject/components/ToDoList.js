import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, Text } from 'react-native';
import ToDoItem from './ToDoItem';

function ToDoList() {
    const [tasks, setTasks] = useState(["Task 1", "Task 2"]);
    const [newTask, setNewTask] = useState("");

    const handleDelete = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    const handleAdd = () => {
        setTasks([...tasks, newTask]);
        setNewTask("");
    }

    return (
        <View style={styles.container}>

            <Text style={styles.instructions}>
                Enter the name of your new task in the input box at the bottom of the screen
            </Text>

            <Text style={styles.instructions}>
                then press "Add Task" to add it to the list. 
            </Text>

            <Text style={styles.instructions}>
                Press the "Completed" button to mark a task as completed
            </Text>
            
            <Text style={styles.instructions}>
                Press "Delete" to remove a task from the list.
            </Text>
            <ScrollView>
                {tasks.map((task, index) => 
                    <ToDoItem key={index} task={task} handleDelete={() => handleDelete(index)} />
                )}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={newTask}
                    onChangeText={setNewTask}
                    placeholder="New task"
                />
                <Button title="Add Task" onPress={handleAdd} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    instructions: {
        fontSize: 16,
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 10,
        backgroundColor: 'white',
    },
    input: {
        width: '80%',
    },
});

export default ToDoList;
