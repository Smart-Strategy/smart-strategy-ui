import React, { useCallback } from "react";
import { FlexProps } from "@chakra-ui/layout/dist/declarations/src/flex";
import { Avatar, Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import BottomArrowIcon from "../icons/BottomArrowIcon";

const Header: React.FunctionComponent<FlexProps> = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onClickMenu = useCallback(
    () => (isOpen ? onClose() : onOpen()),
    [isOpen, onClose, onOpen],
  );

  return (
    <Flex
      align="center"
      justify="space-between"
      wrap="wrap"
      py="1.125rem"
      px={{ base: "2rem", sm: 0 }}
      {...props}
    >
      <Flex align="center">
        <Text textStyle="siteLogo">Smart Strategy</Text>
      </Flex>

      <Box display={{ base: "block", sm: "none" }} onClick={onClickMenu}>
        <HamburgerIcon color="white" width="1.5rem" height="1.5rem" />
      </Box>

      <Box display={{ base: "none", sm: "block" }}>
        <Flex alignItems="center">
          <Avatar bg="teal.500" mr="0.75rem" height="2.75rem" width="2.75rem" />
          <BottomArrowIcon />
        </Flex>
      </Box>
    </Flex>
  );
};

export default React.memo(Header);
