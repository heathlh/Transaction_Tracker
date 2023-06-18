import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

function AccountingSystem() {
    const [transactions, setTransactions] = useState([]);

    const handleAddTransaction = () => {
        const newTransaction = {
            date: new Date().toLocaleDateString(),
            amount: 0,
            note: ''
        };
        setTransactions([...transactions, newTransaction]);
    }

    const calculateBalance = () => {
        return transactions.reduce((total, transaction) => total + transaction.amount, 0);
    }

    return (
        <View style={styles.container}>
            <View style={styles.accountHeader}>
                <Text>Account Name</Text>
                <Text>{calculateBalance()}</Text>
                <Text>Note</Text>
            </View>
            <Button title="Add Transaction" onPress={handleAddTransaction} />
            <ScrollView>
                {transactions.map((transaction, index) => (
                    <View key={index} style={styles.transaction}>
                        <Text>{transaction.date}</Text>
                        <Text>{transaction.amount}</Text>
                        <Text>{transaction.note}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    accountHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    transaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
});

export default AccountingSystem;
