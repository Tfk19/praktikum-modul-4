import React from "react";
import { NativeBaseProvider, Center, Heading} from "native-base";

const NativeBaseBasic = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Heading>
          <Text>Native Base</Text>
          </Heading>
      </Center>
    </NativeBaseProvider>
  );
};

export default NativeBaseBasic;
