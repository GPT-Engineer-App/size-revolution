import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, Icon, Image, Input, Link, Select, Text, Textarea, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { FaFacebook, FaGoogle, FaTwitter, FaUser, FaLock, FaShare, FaEnvelope, FaPencilAlt, FaEye } from "react-icons/fa";

const Index = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleSizeSelect = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>
        MySize
      </Heading>

      {!loggedIn ? (
        <Flex direction="column" align="center">
          <Button leftIcon={<FaGoogle />} colorScheme="red" size="lg" mb={4} onClick={handleLogin}>
            Login with Google
          </Button>
          <Button leftIcon={<FaFacebook />} colorScheme="facebook" size="lg" mb={4} onClick={handleLogin}>
            Login with Facebook
          </Button>
          <Button leftIcon={<FaTwitter />} colorScheme="twitter" size="lg" onClick={handleLogin}>
            Login with Twitter
          </Button>
        </Flex>
      ) : (
        <>
          <Flex align="center" mb={8}>
            <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMDgyNTE0MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="User Avatar" borderRadius="full" boxSize="150px" mr={8} />
            <Box>
              <Heading as="h2" size="xl" mb={2}>
                John Doe
              </Heading>
              <Text fontSize="lg">
                <Icon as={FaUser} mr={2} />
                Profile
              </Text>
              <Text fontSize="lg">
                <Icon as={FaLock} mr={2} />
                Private Sizes
              </Text>
            </Box>
          </Flex>

          <Flex mb={8}>
            <Select placeholder="Select size" mr={4} value={selectedSize} onChange={handleSizeSelect}>
              <option value="s">Small</option>
              <option value="m">Medium</option>
              <option value="l">Large</option>
              <option value="xl">Extra Large</option>
            </Select>
            <Button leftIcon={<FaShare />} colorScheme="blue" onClick={onOpen}>
              Share Size
            </Button>
          </Flex>

          <Box mb={8}>
            <Heading as="h3" size="lg" mb={4}>
              Public Sizes
            </Heading>
            <Flex>
              <Box p={4} borderWidth={1} borderRadius="md" mr={4}>
                <Text fontWeight="bold" mb={2}>
                  T-Shirt
                </Text>
                <Text>Medium</Text>
              </Box>
              <Box p={4} borderWidth={1} borderRadius="md">
                <Text fontWeight="bold" mb={2}>
                  Jeans
                </Text>
                <Text>32x32</Text>
              </Box>
            </Flex>
          </Box>

          <Box>
            <Heading as="h3" size="lg" mb={4}>
              3D Interactive Models
            </Heading>
            <Image src="https://images.unsplash.com/photo-1634018940067-b8b58c6c6fa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMGNsb3RoaW5nJTIwbW9kZWx8ZW58MHx8fHwxNzEwODI1MTQwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="3D Clothing Model" mb={4} />
            <Link href="#" fontSize="lg">
              <Icon as={FaEye} mr={2} />
              View More Models
            </Link>
          </Box>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Share Size</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input placeholder="Recipient Email" mb={4} />
                <Textarea placeholder="Message" mb={4} />
                <Textarea placeholder="Additional Notes" />
              </ModalBody>
              <ModalFooter>
                <Button leftIcon={<FaEnvelope />} colorScheme="blue" mr={3}>
                  Send
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default Index;
