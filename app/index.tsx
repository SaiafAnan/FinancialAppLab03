//index.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionsList from './screens/TransactionsList';
import TransactionDetail from './screens/TransactionDetail';
import Summary from './screens/Summary';
import { RootStackParamList } from './navigation/types';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function TransactionsStack() {
  return (
    <Stack.Navigator initialRouteName="TransactionsList">
      <Stack.Screen name="TransactionsList" component={TransactionsList} options={{ title: 'Transactions' }} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{ title: 'Transaction Detail' }} />
    </Stack.Navigator>
  );
}

const tabBarIcon = (route: string, focused: boolean, color: string, size: number) => {
  let iconName: keyof typeof MaterialIcons.glyphMap;

  if (route === 'Transactions') {
    iconName = 'credit-card'; // Ensure this is a valid icon name
  } else if (route === 'Summary') {
    iconName = 'pie-chart'; // Ensure this is a valid icon name
  } else {
    iconName = 'error'; // Default case
  }

  return <MaterialIcons name={iconName} size={size} color={color} />;
};

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => tabBarIcon(route.name, focused, color, size),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Transactions" component={TransactionsStack} options={{ headerShown: false, title: 'Transactions' }} />
        <Tab.Screen name="Summary" component={Summary} options={{ title: 'Summary' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
