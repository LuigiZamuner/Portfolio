import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);

    try {
      await wait(2000);

      setResponse({
        type: "success",
        message: `Obrigado pelo contato, ${data.firstName}! Retornarei em breve.`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message: "Algo deu errado, tente novamente mais tarde.",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;