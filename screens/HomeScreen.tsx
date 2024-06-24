import React from 'react';
import { Button, View, Text, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='Scan QR Code' />
      <Button
        title='Go to details'
        onPress={() => navigation.navigate('Details', { itemId: 86 })}
      />
    </View>
  );
};

export default HomeScreen;
