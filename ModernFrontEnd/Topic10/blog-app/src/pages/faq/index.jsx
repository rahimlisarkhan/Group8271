import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import Header from "../../components/Header";
import { useTitle } from "../../hooks/useTitle";
import { getFaqs } from "../../services/faq";
import { useFetchData } from "../../hooks/useFetchData";

import Loading from "../../components/Loading";

function Faq() {
  useTitle("FAQ | Blog app");

  const { data, loading } = useFetchData({ requestFn: () => getFaqs() });

  console.log('"data', data);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Box p={100}>
        <Text fontSize="6xl" align="center">
          FAQ Q&A
        </Text>
        <Accordion defaultIndex={[0]} allowMultiple>
          {data?.faqs?.map((faq) => (
            <AccordionItem key={"faq-id-" + faq?.id}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {faq?.title}
                  </Box>
                  <ArrowDownIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{faq?.desc}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </>
  );
}

export default Faq;
