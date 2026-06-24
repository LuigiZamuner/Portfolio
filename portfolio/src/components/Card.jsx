import { Heading, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="white"
      borderRadius="lg"
      overflow="hidden"
      alignItems="flex-start"
      spacing={0}
    >
      <Image src={imageSrc} alt={title} />

      <VStack p={4} alignItems="flex-start" spacing={4}>
        <Heading as="h2" size="md" color="black">
          {title}
        </Heading>

        <Text color="gray.600">
          {description}
        </Text>

        <HStack spacing={2} color="black">
          <Link href={"http://localhost:5173/"} isExternal _hover={{ textDecoration: "none" }}>
            <HStack spacing={2} color="black">
              <Text fontWeight="bold">See more</Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
