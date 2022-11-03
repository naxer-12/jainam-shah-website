import { Box, Text, Flex, Heading } from "rebass";
import Image from "next/image";
import Link from "../components/Link";
import styled from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function Home() {
  return (
    <Layout>
      <style jsx global>{`
        :root {
          --surface-background: var(--charcoal);
          --primary-text: var(--white);
          --secondary-text: var(--smoke-shadow);
          --surface-highlight: #393939;
          --overlay: rgba(10, 10, 10, 0.4);
          --link: #4bb7ff;
        }
      `}</style>
      <Box mb={[5, 6]}>
        <Text fontWeight="bold">Hello, my name is Jainam.</Text>
        <Text mb={[3, 6]}>
          lorem ipsum dolor sit amet, consectetur adipiscing
        </Text>
      </Box>

      <Text mb={[2, 4]} mt={[5]} fontWeight="bold">
        Recent Work
      </Text>
      <Flex mx={[0, -4]} flexDirection="column">
        <Flex flexDirection={["column", "row"]}>
          <WorkLink
            url="https://www.phyxable.com/"
            image="https://res.cloudinary.com/dlfwnm1zp/image/upload/v1665334138/phyxable-icon_adkjep.png"
            name="Phyxable"
            dates="2020 - 2021"
          />
          <WorkLink
            url="https://jarvistechnolabs.com/"
            image="https://res.cloudinary.com/dlfwnm1zp/image/upload/v1665334137/jarvis-technolabs-icon_b2d0es.png"
            name="Jarvis Technolabs"
            dates="2019 - 2020"
          />
        </Flex>
      </Flex>
      <Text mb={[2, 4]} mt={[5]} fontWeight="bold">
        Projects
      </Text>

      <Card />

      {/* <Box
        sx={{
          display: "grid",
          gridGap: 4,
          gridTemplateColumns: "repeat(auto-fit, minmax(128px, 1fr))",
        }}
      >
        <Heading p={3} bg="muted">
          Hello
        </Heading>
        <Box p={3} color="background" bg="primary">
          CSS Grid
        </Box>
      </Box> */}
    </Layout>
  );
}

function WorkLink(props) {
  return (
    <Link
      width={["auto", "100%"]}
      passHref
      className={styled.workLink}
      px={[0, "25px"]}
      mx={[0, "0"]}
      py="20px"
      href={props.url}
      mr={[0, 4]}
      mb={[0, 4]}
    >
      <Flex>
        <Image
          alt={`${props.name} icon`}
          width={60}
          height={60}
          src={props.image}
        />
        <Box ml="16px">
          <Text mt={["6px", "4px"]} style={{ lineHeight: 1 }}>
            {props.name}
          </Text>
          <Text opacity={0.6}>{props.dates}</Text>
        </Box>
      </Flex>
    </Link>
  );
}
