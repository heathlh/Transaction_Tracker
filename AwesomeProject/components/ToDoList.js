import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, Text, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ToDoItem from './ToDoItem';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        loadTasksFromStorage();
    }, []);

    useEffect(() => {
        saveTasksToStorage();
    }, [tasks]);

    const loadTasksFromStorage = async () => {
        try {
            const storedTasks = await AsyncStorage.getItem('@tasks');
            if(storedTasks !== null) {
                setTasks(JSON.parse(storedTasks));
            }
        } catch(e) {
            console.error(e);
        }
    };

    const saveTasksToStorage = async () => {
        try {
            await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
        } catch(e) {
            console.error(e);
        }
    };

    const handleDelete = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    const handleAdd = () => {
        if (newTask.length > 0) {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    return (
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
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