import React, { FC } from 'react';
import { Platform } from 'react-native';
import { HStack, useColorModeValue } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { ScreenName } from '@/navigation/types';
import BottomMenuItem from './BottomMenuItem';

type IconName = keyof typeof Ionicons.glyphMap;
type MenuItem = { icon: IconName; screen: ScreenName };

interface Props {
  currentRoute: string;
  changeRoute: (route: ScreenName) => void;
}

const menuItems: MenuItem[] = [
  { icon: 'file-tray-stacked', screen: 'Home' },
  { icon: 'bar-chart', screen: 'History' },
  { icon: 'settings', screen: 'Settings' },
];

const BottomMenu: FC<Props> = ({ currentRoute, changeRoute }) => {
  if (Platform.OS === 'android' && currentRoute === 'Operation') {
    return null;
  }

  return (
    <HStack
      safeAreaBottom
      shadow={2}
      px={4}
      pt={4}
      pb={2}
      justifyContent="space-around"
      alignItems="center"
      bg={useColorModeValue('coolGray.100', 'coolGray.800')}
    >
      {menuItems.map(({ icon, screen }) => (
        <BottomMenuItem
          icon={icon}
          isActive={currentRoute === screen}
          onPress={() => changeRoute(screen)}
          key={screen}
        />
      ))}
    </HStack>
  );
};

export default BottomMenu;
