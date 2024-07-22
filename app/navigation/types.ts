import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the structure of your application's routes
export type RootStackParamList = {
  TransactionsList: undefined;
  TransactionDetail: { transaction: Transaction };
  Summary: undefined;
};

// Define the Transaction interface, if not already defined
export interface Transaction {
  id: string;
  name: string;
  amount: string;
  date: string;
}

// Props type for the TransactionDetail component
export type TransactionDetailProps = NativeStackScreenProps<RootStackParamList, 'TransactionDetail'>;
