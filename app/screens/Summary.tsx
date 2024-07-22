//Summary.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Summary() {
  return (
    <View style={styles.container}>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Total Expenses:</Text>
        <Text style={styles.amountText}>$692.39</Text>
      </View>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>High Spending:</Text>
        <Text style={styles.amountText}>Nike $250.00</Text>
      </View>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Low Spending:</Text>
        <Text style={styles.amountText}>Tim Hortons $7.89</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F9FAFB', // light grey background for the whole screen
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FFFFFF', // white background for each summary
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
  summaryText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  amountText: {
    fontSize: 16,
  }
});
