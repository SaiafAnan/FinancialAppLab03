//TransactionDetail.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TransactionDetailProps } from '../navigation/types';  // Ensure this import is correct

const TransactionDetail: React.FC<TransactionDetailProps> = ({ route }) => {
  const { transaction } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Name:</Text>
        <Text style={styles.detailText}>{transaction.name}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Amount:</Text>
        <Text style={styles.detailText}>{transaction.amount}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Date:</Text>
        <Text style={styles.detailText}>{transaction.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F9FAFB', // light grey background for the whole screen
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#FFFFFF', // white background for each detail
    width: '100%',
    padding: 10,
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
  detailLabel: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  detailText: {
    flex: 1, // ensures the text uses the available space
  }
});

export default TransactionDetail;
