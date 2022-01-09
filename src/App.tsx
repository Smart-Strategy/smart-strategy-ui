import React from "react";
import { Box, ChakraProvider, Flex, Text } from "@chakra-ui/react";
import Header from "./components/Header";
import { theme } from "./theme";

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        bg="primary"
        w="100wh"
        h="100vh"
        px={{ md: "5rem", sm: "2rem" }}
        pb={{ md: "5rem", sm: "2rem" }}
        flexDirection="column"
      >
        <Header />
        <Flex
          h="full"
          borderRadius={{ sm: 10 }}
          overflow="hidden"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            minW={{ md: "22rem" }}
            width="full"
            maxW={{ md: "26rem" }}
            bg="secondary"
            px={{ base: "1.125rem", sm: "2.5rem" }}
            pt={{ base: "1.125rem", sm: "1.5rem" }}
            pb={{ base: "1.125rem", sm: "2.5rem" }}
          >
            <Text>Test</Text>
          </Box>
          <Box
            minW={{ md: "32rem" }}
            height="full"
            width="full"
            maxW={{ md: "60rem" }}
            bg="accent"
          >
            <Text>Test2</Text>
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
