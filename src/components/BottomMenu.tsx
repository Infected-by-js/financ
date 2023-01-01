import React, { FC } from 'react';
import { HStack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { RootParamList } from '@/navigation/types';
import BottomMenuItem from './BottomMenuItem';

type ScreenName = keyof RootParamList;
type IconName = keyof typeof Ionicons.glyphMap;
type MenuItem = { icon: IconName; screen: ScreenName };

interface Props {
  currentRoute: string;
  changeRoute: (route: ScreenName) => void;
}

const menuItems: MenuItem[] = [
  { icon: 'file-tray-stacked', screen: 'Main' },
  { icon: 'bar-chart', screen: 'History' },
  { icon: 'settings', screen: 'Settings' },
];

const BottomMenu: FC<Props> = ({ currentRoute, changeRoute }) => {
  return (
    <HStack
      bg="blueGray.100"
      safeAreaBottom
      shadow={2}
      px={4}
      pt={4}
      justifyContent="space-around"
      alignItems="center"
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
