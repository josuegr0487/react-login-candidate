import React, { useState } from "react";
import {
  Heading,
  Box,
  Flex,
  Image,
  Center,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Candidate } from '../interfaces/interface'

export default function Login() {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  function handleChange(event: any) {
    setEmail(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const url = `https://e3crxftl01.execute-api.us-west-1.amazonaws.com/candidates/email/${email}`;
    setEmail("");
    fetch(url)
      .then((response) => response.json())
      .then((candidate) => {
        if (candidate.length === 0) {
          setShowAlert(true);
        } else {
          setShowAlert(false);
          doProfile(candidate);
        }
      });
  }

  function doProfile(candidate: Candidate) {
    navigate("/candidates/profile", {state: candidate});
  }

  return (
    <>
      {showAlert && (
        <Alert status="error" variant="left-accent" position="fixed">
          <AlertIcon />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>
            You don't have an account, sign up please
          </AlertDescription>
        </Alert>
      )}
      <Flex h="100vh">
        <Center w={{ base: "0%", md: "50%" }} bg="#295DBE">
          <Image src={"./assets/rh.png"}></Image>
        </Center>

        <Center w={{ base: "100%", md: "50%" }}>
          <Box maxW="sm" overflow="hidden" p={2}>
            <Box textAlign="center" mb={4}>
              <Heading>Bienvenido otra vez!</Heading>
            </Box>
            <Box textAlign="justify">
              <Text fontSize="small" as="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                sint nihil eum ut voluptate fuga rerum omnis itaque quam ullam!
                Eligendi unde eos quos, eum ut tempora soluta quaerat omnis.
              </Text>
            </Box>
            <Box my={8} textAlign="left">
              <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="test@test.com"
                    value={email}
                    onChange={handleChange}
                  />
                </FormControl>
                <Button
                  width="full"
                  mt={8}
                  type="submit"
                  bg="#295DBE"
                  color="white"
                >
                  Ingresar
                </Button>
              </form>
            </Box>
          </Box>
        </Center>
      </Flex>
    </>
  );
}
