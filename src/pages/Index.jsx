import { Box, Container, Heading, Text, Button, VStack, Input, Textarea, useToast } from "@chakra-ui/react";
import { FaUpload, FaRegFileAlt, FaPlusCircle } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleUpload = () => {
    toast({
      title: "Upload Successful",
      description: "Your files have been uploaded successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSubmit = () => {
    toast({
      title: "Report Generated",
      description: "Your report has been generated and is ready for download.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          CT and MRI Report Generation Platform
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Use structured templates to generate reports for CT and MRI scans.
        </Text>

        <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
          <VStack spacing={4}>
            <Heading as="h2" size="lg">
              Upload Scans
            </Heading>
            <Input type="file" multiple placeholder="Upload CT/MRI scans" />
            <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={handleUpload}>
              Upload Files
            </Button>
          </VStack>
        </Box>

        <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
          <VStack spacing={4}>
            <Heading as="h2" size="lg">
              Generate Report
            </Heading>
            <Textarea placeholder="Enter additional information here..." />
            <Button leftIcon={<FaRegFileAlt />} colorScheme="green" onClick={handleSubmit}>
              Generate Report
            </Button>
          </VStack>
        </Box>

        <Button leftIcon={<FaPlusCircle />} colorScheme="purple" size="lg">
          Add New Template
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
