import Nav from "./Nav";
import Footer from "./Footer";
import Head from "./Head";
import { Box, Flex } from "rebass";

export default function Layout({ children }) {
  return (
    <Flex flexDirection="column">
      <Box maxWidth={"46rem"} width={"90%"} mx="auto">
        <Head />
        <Nav />
        <Box mt={[5, 6]}>{children}</Box>
      </Box>
      <Footer />
    </Flex>
  );
}
