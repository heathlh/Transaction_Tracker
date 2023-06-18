import * as React from 'react';
import {Button,Text,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CountChange from './CountChange';
import KeyPad from './KeyPad';
import AccountingSystem from './AccountingSystem';

// import toDoList
import ToDoList from './ToDoList'; 

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    return (
     <View style={{ flexDirection:'row', justifyContent:'space-evenly'}}>
            <Button
                title="Go to Hang's profile"
                onPress={() =>
                navigation.navigate('Profile', {name: 'THang'})
                }
            />
            <Button
                title="Count Change"
                onPress={() =>
                navigation.navigate('CountChange') 
                }
            />
            <Button
                title= "KeyPad"
                onPress = {()=>
                navigation.navigate('KeyPad')
                }
            />

            <Button
                title= "ToDo List"
                onPress = {()=>
                navigation.navigate('ToDoList')
                }
            />


            <Button
                title= "Accounting System"
                onPress = {()=>
                navigation.navigate('AccountingSystem')
                }
            />


      </View>
    );
  };

  const ProfileScreen = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };

  const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
          />
          <Stack.Screen 
            name="CountChange" 
            component={CountChange} 
          />
          <Stack.Screen 
            name="KeyPad" 
            component ={KeyPad} 
          />
          <Stack.Screen 
            name="ToDoList" 
            component ={ToDoList} 
          />
          <Stack.Screen 
            name="AccountingSystem" 
            component ={AccountingSystem} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  

export default MyStack;
