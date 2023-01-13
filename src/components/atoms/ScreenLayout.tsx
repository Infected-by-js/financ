import { FC, ReactNode } from 'react';
import { VStack, useColorModeValue } from 'native-base';
import { IVStackProps } from 'native-base/lib/typescript/components/primitives/Stack/VStack';

interface Props extends IVStackProps {
  children?: ReactNode;
}

const ScreenLayout: FC<Props> = ({ children, ...rest }) => {
  return (
    <VStack
      w="full"
      h="full"
      p={4}
      bg={useColorModeValue('coolGray.100', 'coolGray.800')}
      {...rest}
    >
      {children}
    </VStack>
  );
};

export default ScreenLayout;
