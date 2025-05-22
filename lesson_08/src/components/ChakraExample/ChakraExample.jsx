import React from 'react';
import { Box, Button, Heading, Text, Flex, Stack } from '@chakra-ui/react';

const ChakraExample = () => {
  return (
    <Flex minH="50vh" bg="gray.50" align="center" justify="center" p={4}>
      <Box p={8} borderRadius="lg" shadow="xl" textAlign="center">
        <Heading as="h1" size="xl" color="teal.500" mb={4}>
          Chakra UI
        </Heading>
        <Text fontSize="lg" color="gray.700" mb={6}>
          Ready-to-use accessible components.
        </Text>
        <Stack spacing={4}>
          <Button colorScheme="blue" size="lg" onClick={() => alert('Chakra button clicked!')}>
            Default Chakra Button
          </Button>
          <Button variant="brandPrimary" onClick={() => alert('Custom Chakra button clicked!')}>
            Custom Brand Button
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default ChakraExample;