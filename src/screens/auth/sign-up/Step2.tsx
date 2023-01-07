import { FC, useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import {
  Button,
  Center,
  HStack,
  Icon,
  Image,
  Spinner,
  Text,
  View,
  useColorModeValue,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import InputFieldText from '@/components/InputFieldText';
import { User } from '@/shared/types/models';

interface Props {
  initName: string;
  initAvatar: string | null;
  submitStep: (field: Partial<User>) => void;
  backToPrevStep: () => void;
}

const Step2: FC<Props> = ({ submitStep, initName, initAvatar, backToPrevStep }) => {
  const [avatar, setAvatar] = useState<string | null>(initAvatar || null);
  const [name, setName] = useState(initName || '');
  const [isAvatarPicking, setIsAvatarPicking] = useState(false);

  const pickAvatar = async () => {
    try {
      setIsAvatarPicking(true);

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 4],
        quality: 1,
      });

      if (!result.canceled) {
        setAvatar(result.assets[0].uri);
      }
    } catch {
      Alert.alert('Ошибка добавления фото');
    } finally {
      setIsAvatarPicking(false);
    }
  };

  return (
    <View mx={12}>
      <Text fontSize="sm" color="coolGray.400" mb={6}>
        Этот шаг можно пропустить 😉
      </Text>

      <Text fontSize="sm" fontWeight="bold" mb={1} textAlign="center">
        Добавь фотографию
      </Text>

      <TouchableOpacity onPress={pickAvatar}>
        <Center
          w={100}
          h={100}
          rounded="full"
          borderColor="coolGray.400"
          borderWidth={2}
          mb={4}
          alignSelf="center"
        >
          {isAvatarPicking ? (
            <Spinner size="lg" color="coolGray.400" />
          ) : avatar ? (
            <Image source={{ uri: avatar }} w="full" h="full" alt="Avatar" rounded="full" />
          ) : (
            <Icon as={Ionicons} name="add-sharp" size="4xl" />
          )}
        </Center>
      </TouchableOpacity>

      <InputFieldText
        value={name}
        onChange={setName}
        label="Как к тебе обращаться?"
        placeholder={initName}
        mb={4}
      />

      <HStack justifyContent="space-between" mt={8}>
        <Button
          onPress={backToPrevStep}
          borderColor={useColorModeValue('coolGray.800', 'coolGray.300')}
          _pressed={{ bg: 'coolGray.500' }}
          mr={8}
          flex={1}
          variant="outline"
        >
          <Icon
            as={Ionicons}
            name="arrow-back"
            color={useColorModeValue('coolGray.900', 'coolGray.100')}
          />
        </Button>

        <Button
          onPress={() => submitStep({ avatar, name })}
          bg={useColorModeValue('coolGray.800', 'coolGray.300')}
          _pressed={{ bg: 'coolGray.500' }}
          flex={1}
        >
          <Icon
            as={Ionicons}
            name="arrow-forward"
            color={useColorModeValue('coolGray.100', 'coolGray.900')}
          />
        </Button>
      </HStack>
    </View>
  );
};

export default Step2;
