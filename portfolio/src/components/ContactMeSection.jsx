import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

 const formik = useFormik({
  initialValues: {
    firstName: "",
    email: "",
    type: "hireMe", 
    comment: "",
  },
  onSubmit: async (values) => {
    await submit(null, values);
  },
  validationSchema: Yup.object({
    firstName: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    type: Yup.string().required("Required"),
    comment: Yup.string()
      .min(25, "Must be at least 25 characters")
      .required("Required"),

  }),
});

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);

      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response, onOpen]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contato
        </Heading>

        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={
                  formik.touched.firstName &&
                  Boolean(formik.errors.firstName)
                }
              >
                <FormLabel htmlFor="firstName">Nome</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>
                  {formik.errors.firstName}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={
                  formik.touched.email &&
                  Boolean(formik.errors.email)
                }
              >
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>
                  {formik.errors.email}
                </FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type">Tipo</FormLabel>
                <Select
                  id="type"
                  name="type"
                  bg="#512DA8"
                  {...formik.getFieldProps("type")}
                >
                  <option value="hireMe" style={{ background: "#ab92e6" }}>
                    Contratação
                  </option>
                  <option value="project" style={{ background: "#ab92e6" }}>
                    Projeto
                  </option>
                  <option value="partnership" style={{ background: "#ab92e6" }}>
                    Parceria
                  </option>
                  <option value="question" style={{ background: "#ab92e6" }}>
                    Dúvida
                  </option>
                  <option value="other" style={{ background: "#ab92e6" }}>
                    Outro
                  </option>
                </Select>
              </FormControl>

              <FormControl
                isInvalid={
                  formik.touched.comment &&
                  Boolean(formik.errors.comment)
                }
              >
                <FormLabel htmlFor="comment">
                  Mensagem
                </FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>
                  {formik.errors.comment}
                </FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;