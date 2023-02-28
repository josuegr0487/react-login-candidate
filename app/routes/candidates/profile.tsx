import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Center,
  Avatar,
  List,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import { useLocation } from "@remix-run/react";
import { Candidate } from "../../interfaces/interface";

export default function Profile() {
  const { state } = useLocation();
  const [candidate]: [Candidate] = state;

  return (
    <>
      <Box p="10">
        <Heading size="md">Perfil de Candidato</Heading>
      </Box>
      <Flex direction={"column"}>
        <Center w="100%">
          <Box>
            <Avatar size="2xl" name={candidate.name} src={candidate.photo} />{" "}
          </Box>
        </Center>
        <Center w="100%" pt="5">
          <Box maxW="md" borderWidth="2px" borderRadius="lg" overflow="hidden">
            <List spacing={3}>
              <ListItem pt={2} px={2}><b>Nombre:</b> {candidate.name}</ListItem>
              <Divider />
              <ListItem pt={2} px={2}><b>Ciudad:</b> {candidate.city}</ListItem>
              <Divider />
              <ListItem pt={2} px={2}><b>Estado:</b> {candidate.country}</ListItem>
              <Divider />
              <ListItem pt={2} px={2}><b>Email:</b> {candidate.email}</ListItem>
              <Divider />
              <ListItem pt={2} px={2}><b>Linkedin:</b> {candidate.linkedin}</ListItem>
              <Divider />
              <ListItem pt={2} px={2}><b>Nacionalidad:</b> {candidate.nationality}</ListItem>
              <Divider />
              <ListItem pt={2} px={2}>
              <b>Telefono:</b> {candidate.phone.areaCode} {candidate.phone.number}
              </ListItem>
              <Divider />
            </List>
          </Box>
        </Center>
      </Flex>
    </>
  );
}

/* 
{e.map((i) => {
    return <span>{i}</span>
})} */
