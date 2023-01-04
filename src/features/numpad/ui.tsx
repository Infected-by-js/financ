import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Icon, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { ActionType, NumPadProps } from './types';

const Numpad = ({ onItemClick }: NumPadProps) => {
  const numberRange = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'X'];

  const onButtonPress = (item: string) => {
    const TYPES: { [key: string]: ActionType } = {
      X: 'delete',
      '.': 'separate',
    };

    onItemClick({
      value: item,
      actionType: TYPES[item] || 'insert',
    });
  };

  return (
    <View>
      <FlatList
        data={numberRange}
        horizontal={false}
        scrollEnabled={false}
        numColumns={3}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => onButtonPress(item)}
          >
            {item === 'X' ? (
              <Icon as={Ionicons} name="backspace" color="coolGray.400" size="3xl" />
            ) : (
              <Text color="coolGray.400" fontSize="3xl">
                {item}
              </Text>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Numpad;
