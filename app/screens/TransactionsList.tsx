//TransactionList.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Transaction, RootStackParamList } from '../navigation/types';  
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type TransactionsListNavigationProp = NativeStackNavigationProp<RootStackParamList, 'TransactionsList'>;

const transactions: Transaction[] = [
    { id: '1', name: 'Starbucks', amount: '$12.00', date: '2023-07-20' },
    { id: '2', name: 'Apple Store', amount: '$101.00', date: '2023-07-21' },
    { id: '3', name: 'Sephora', amount: '$120.00', date: '2023-07-22' },
    { id: '4', name: 'Shoppers Drug Mart', amount: '$12.00', date: '2023-07-23' },
    { id: '5', name: 'Pizza Hut', amount: '$24.00', date: '2023-07-24' },
    { id: '6', name: 'Cheesecake Factory', amount: '$45.00', date: '2023-07-25' },
    { id: '7', name: 'Nike', amount: '$250.00', date: '2023-07-26' },
    { id: '8', name: 'Tim Hortons', amount: '$7.89', date: '2023-07-27' },
    { id: '9', name: 'Whole Foods', amount: '$78.00', date: '2023-07-28' },
    { id: '10', name: 'Cineplex', amount: '$42.50', date: '2023-07-29' },
];

export default function TransactionsList() {
    const navigation = useNavigation<TransactionsListNavigationProp>();
  
    return (
      <View style={{ flex: 1, paddingTop: 10 }}>
        <FlatList
          data={transactions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
              style={styles.itemContainer}
            >
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{item.amount}</Text>
              <Text style={styles.itemDate}>{item.date}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    itemContainer: {
      backgroundColor: '#ffffff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    itemText: {
      fontSize: 16,
      color: '#333',
    },
    itemDate: {
      fontSize: 14,
      color: '#666',
      marginTop: 4,
    }
  });