import { Container, Text, VStack, Box, Heading, Button, Image } from "@chakra-ui/react";
import { FaApple } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Apple World
          </Heading>
          <Text fontSize="lg" mb={6}>
            Discover the amazing world of apples. Learn about different varieties, health benefits, and delicious recipes.
          </Text>
          <Button colorScheme="red" size="lg" leftIcon={<FaApple />}>
            Learn More
          </Button>
        </Box>
        <Box boxSize="sm">
          <Image src="/images/apple-banner.jpg" alt="Apples" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;