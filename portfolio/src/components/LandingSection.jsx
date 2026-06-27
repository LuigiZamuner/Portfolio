import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import icon from "../assets/icon.jpg";

const greeting = "Ola, me chamo Luigi!";
const bio1 = "Frontend react developer";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

 <VStack spacing={4}>
      <Avatar
        size="2xl"
        src={icon}
      />
      <Heading as="h4" size="md">
        {greeting}
      </Heading>
      <Heading as="h1" size="2xl">
        {bio1}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
