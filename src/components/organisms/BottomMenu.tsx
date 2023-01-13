import { FC } from 'react';
import { Platform } from 'react-native';
import { HStack, Icon, Pressable, useColorModeValue } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

type ScreenName = keyof ReactNavigation.RootParamList;
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
      p={4}
      justifyContent="space-around"
      alignItems="center"
      bg={useColorModeValue('coolGray.100', 'coolGray.800')}
    >
      {menuItems.map(({ icon, screen }) => (
        <Pressable p={2} onPress={() => changeRoute(screen)} key={screen}>
          <Icon
            as={Ionicons}
            color={useColorModeValue('coolGray.800', 'coolGray.100')}
            size="lg"
            name={currentRoute === screen ? icon : `${icon}-outline`}
          />
        </Pressable>
      ))}
    </HStack>
  );
};

export default BottomMenu;
