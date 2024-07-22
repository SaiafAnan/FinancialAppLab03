import { NativeStackScreenProps } from '@react-navigation/native-stack';


export type RootStackParamList = {
  TransactionsList: undefined;
  TransactionDetail: { transaction: Transaction };
  Summary: undefined;
};


export interface Transaction {
  id: string;
  name: string;
  amount: string;
  date: string;
}

export type TransactionDetailProps = NativeStackScreenProps<RootStackParamList, 'TransactionDetail'>;
