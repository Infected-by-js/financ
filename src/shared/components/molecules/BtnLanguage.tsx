import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Actionsheet, Icon, Text, useDisclose } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useLocalization } from '@/hooks';

const BtnLanguageSwitch: FC = () => {
  const { language, strings, setLanguage } = useLocalization();
  const { isOpen, onOpen, onClose } = useDisclose();

  const selectLang = (lang: Language) => {
    setLanguage(lang);
    onClose();
  };

  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Icon as={Ionicons} name="language" size="xl" />
      </TouchableOpacity>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Text fontSize="16" color="gray.500" _dark={{ color: 'gray.300' }} mb={4} mt={2}>
            {strings.lang.SelectLang}
          </Text>
          <Actionsheet.Item onPress={() => selectLang('ru')}>🇷🇺 РУ</Actionsheet.Item>
          <Actionsheet.Item onPress={() => selectLang('en')}>🇺🇸 EN</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};

export default BtnLanguageSwitch;
