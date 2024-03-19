import React, { useState } from "react";
import { AspectRatio, Box, Button, FormControl, FormLabel, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";

const Models = () => {
  const [sizes, setSizes] = useState({
    shirt: "Medium",
    pants: "32x32",
    shoes: "10",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeHotspot, setActiveHotspot] = useState(null);

  const handleHotspotClick = (hotspot) => {
    setActiveHotspot(hotspot);
    onOpen();
  };

  const handleSizeChange = (event) => {
    setSizes({
      ...sizes,
      [activeHotspot]: event.target.value,
    });
  };

  return (
    <Box>
      <Heading as="h2" size="xl" mb={6}>
        3D Interactive Models
      </Heading>
      <AspectRatio ratio={1} maxW="600px" mx="auto" mb={12}>
        <Box pos="relative">
          <Image src="https://images.unsplash.com/photo-1618453292459-53424b66bb6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdGhpbmcsbW9kZWx8fHx8fHwxNjc5OTMxNjUy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="3D Model" objectFit="cover" borderRadius="lg" />
          <Box pos="absolute" top="20%" left="40%" w="20%" h="10%" bg="rgba(255,255,255,0.2)" backdropFilter="blur(10px)" borderRadius="md" _hover={{ bg: "rgba(255,255,255,0.4)" }} onClick={() => handleHotspotClick("shirt")} cursor="pointer" transition="all 0.3s" />
          <Box pos="absolute" top="40%" left="35%" w="30%" h="20%" bg="rgba(255,255,255,0.2)" backdropFilter="blur(10px)" borderRadius="md" _hover={{ bg: "rgba(255,255,255,0.4)" }} onClick={() => handleHotspotClick("pants")} cursor="pointer" transition="all 0.3s" />
          <Box pos="absolute" top="70%" left="40%" w="20%" h="10%" bg="rgba(255,255,255,0.2)" backdropFilter="blur(10px)" borderRadius="md" _hover={{ bg: "rgba(255,255,255,0.4)" }} onClick={() => handleHotspotClick("shoes")} cursor="pointer" transition="all 0.3s" />
        </Box>
      </AspectRatio>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update {activeHotspot} Size</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={6}>
              <FormLabel fontSize="lg">{activeHotspot} Size</FormLabel>
              <Input type="text" value={sizes[activeHotspot]} onChange={handleSizeChange} size="lg" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="brand" size="lg" onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update {activeHotspot} Size</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>{activeHotspot} Size</FormLabel>
              <Input type="text" value={sizes[activeHotspot]} onChange={handleSizeChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Models;
