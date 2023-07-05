import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Text, SafeAreaView, FlatList } from 'react-native';
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
            <View style={styles.header}>
                <Text style={styles.headerTitle}>ToDo List</Text>
            </View>
            <FlatList
                data={tasks}
                renderItem={({item, index}) => <ToDoItem key={index} task={item} handleDelete={() => handleDelete(index)} />}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={newTask}
                    onChangeText={setNewTask}
                    placeholder="New task"
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    header: {
        paddingTop: 60,
        paddingBottom: 20,
        backgroundColor: '#736AB7',
    },
    headerTitle: {
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 10,
        backgroundColor: '#736AB7',
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
    },
    addButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#20B2AA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        // Added marginTop to shift down the text
        marginTop: -2
    },
});


export default ToDoList;
