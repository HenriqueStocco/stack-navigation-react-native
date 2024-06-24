import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;
type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;
type Props = {
  navigation: DetailsScreenNavigationProp;
  route: DetailsRouteProp;
};

const DetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { itemId } = route.params;
  return (
    <View>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailScreen;
