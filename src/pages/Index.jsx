import React, { useState } from "react";
import { AspectRatio, Box, Button, Container, Flex, FormControl, FormLabel, Heading, Icon, Image, Input, Link, Select, SimpleGrid, Text, Textarea, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { FaFacebook, FaGoogle, FaTwitter, FaUser, FaLock, FaShare, FaEnvelope, FaPencilAlt, FaEye, FaChevronRight } from "react-icons/fa";

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
    <>
      {!loggedIn ? (
        <Flex direction="column" align="center">
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Welcome to MySize
          </Heading>
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
          <Flex align="center" mb={12}>
            <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMDgyNTE0MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="User Avatar" borderRadius="full" boxSize="150px" mr={8} />
            <Box>
              <Heading as="h2" size="xl" mb={2}>
                John Doe
              </Heading>
              <Flex align="center" mb={2}>
                <Icon as={FaUser} color="brand.500" mr={2} />
                <Link href="/profile" fontWeight="medium">
                  Profile
                </Link>
              </Flex>
              <Flex align="center">
                <Icon as={FaLock} color="brand.500" mr={2} />
                <Text fontWeight="medium">Private Sizes</Text>
              </Flex>
            </Box>
          </Flex>

          <Flex mb={12}>
            <Select placeholder="Select size" mr={4} value={selectedSize} onChange={handleSizeSelect} size="lg">
              <option value="s">Small</option>
              <option value="m">Medium</option>
              <option value="l">Large</option>
              <option value="xl">Extra Large</option>
            </Select>
            <Button leftIcon={<FaShare />} colorScheme="brand" size="lg" onClick={onOpen}>
              Share Size
            </Button>
          </Flex>

          <Box mb={16}>
            <Heading as="h3" size="xl" mb={8}>
              Public Sizes
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={8}>
              <Box p={8} bg="white" borderRadius="lg" boxShadow="xl" transition="all 0.3s" _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}>
                <Text fontWeight="bold" mb={2} fontSize="2xl">
                  T-Shirt
                </Text>
                <Text fontSize="xl" color="gray.500">
                  Medium
                </Text>
              </Box>
              <Box p={8} bg="white" borderRadius="lg" boxShadow="xl" transition="all 0.3s" _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}>
                <Text fontWeight="bold" mb={2} fontSize="2xl">
                  Jeans
                </Text>
                <Text fontSize="xl" color="gray.500">
                  32x32
                </Text>
              </Box>
              <Box p={8} bg="white" borderRadius="lg" boxShadow="xl" transition="all 0.3s" _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}>
                <Text fontWeight="bold" mb={2} fontSize="2xl">
                  Shoes
                </Text>
                <Text fontSize="xl" color="gray.500">
                  10
                </Text>
              </Box>
              <Box p={8} bg="white" borderRadius="lg" boxShadow="xl" transition="all 0.3s" _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}>
                <Text fontWeight="bold" mb={2} fontSize="2xl">
                  Jacket
                </Text>
                <Text fontSize="xl" color="gray.500">
                  Large
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Box mb={24}>
            <Flex justify="space-between" align="center" mb={8}>
              <Heading as="h3" size="xl">
                3D Interactive Models
              </Heading>
              <Link href="/models" fontSize="lg" color="brand.500" fontWeight="medium">
                View All Models <Icon as={FaChevronRight} ml={1} />
              </Link>
            </Flex>
            <SimpleGrid columns={[1, 2]} spacing={8}>
              <AspectRatio ratio={1}>
                <Image src="https://images.unsplash.com/photo-1618453292459-53424b66bb6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdGhpbmcsbW9kZWx8fHx8fHwxNjc5OTMxNjUy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="3D Clothing Model" borderRadius="lg" objectFit="cover" />
              </AspectRatio>
              <AspectRatio ratio={1}>
                <Image src="https://images.unsplash.com/photo-1618453292459-53424b66bb6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdGhpbmcsbW9kZWx8fHx8fHwxNjc5OTMxNjUy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="3D Clothing Model" borderRadius="lg" objectFit="cover" />
              </AspectRatio>
            </SimpleGrid>
          </Box>

          <Box>
            <Heading as="h3" size="lg" mb={6}>
              3D Interactive Models
            </Heading>
            <AspectRatio ratio={16 / 9}>
              <Image src="https://images.unsplash.com/photo-1634018940067-b8b58c6c6fa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMGNsb3RoaW5nJTIwbW9kZWx8ZW58MHx8fHwxNzEwODI1MTQwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="3D Clothing Model" borderRadius="lg" />
            </AspectRatio>
            <Link href="/models" mt={4} fontSize="lg" fontWeight="medium" color="brand.500" _hover={{ textDecoration: "underline" }}>
              <Icon as={FaEye} mr={2} />
              View More Models
            </Link>
          </Box>

          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Share Size</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl mb={4}>
                  <FormLabel>Recipient Email</FormLabel>
                  <Input type="email" placeholder="Enter email" />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Message</FormLabel>
                  <Textarea placeholder="Enter your message" />
                </FormControl>
                <FormControl>
                  <FormLabel>Additional Notes</FormLabel>
                  <Textarea placeholder="Add any additional notes" />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button leftIcon={<FaEnvelope />} colorScheme="brand" mr={3}>
                  Send
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};

export default Index;
