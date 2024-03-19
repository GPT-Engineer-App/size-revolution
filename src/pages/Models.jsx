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
      <AspectRatio ratio={1} maxW="500px" mx="auto" mb={8}>
        <Box pos="relative">
          <Image src="path/to/3d-model.jpg" alt="3D Model" objectFit="cover" />
          <Box pos="absolute" top="25%" left="35%" w="30%" h="15%" bg="rgba(255,255,255,0.2)" _hover={{ bg: "rgba(255,255,255,0.4)" }} onClick={() => handleHotspotClick("shirt")} cursor="pointer" />
          <Box pos="absolute" top="45%" left="30%" w="40%" h="25%" bg="rgba(255,255,255,0.2)" _hover={{ bg: "rgba(255,255,255,0.4)" }} onClick={() => handleHotspotClick("pants")} cursor="pointer" />
          <Box pos="absolute" top="75%" left="35%" w="30%" h="15%" bg="rgba(255,255,255,0.2)" _hover={{ bg: "rgba(255,255,255,0.4)" }} onClick={() => handleHotspotClick("shoes")} cursor="pointer" />
        </Box>
      </AspectRatio>

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
