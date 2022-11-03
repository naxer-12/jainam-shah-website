import { Box, Text, Flex } from "rebass";
import Image from "next/image";
import Link from "../components/Link";
import styled from "../styles/Home.module.css";
import Layout from "../components/Layout";

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
        <Text fontWeight="bold">Hello, my name is Jainam Shah.</Text>
        <Text mb={[2, 4]}>
          I'm a Web and Mobile Developer. My stack includes flutter,react and
          for backend i use nodejs and typescript. I am currently learning more
          about react ecosystem.
        </Text>
        <Text fontStyle="italic">Press ⌘ to get more info.</Text>
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
            dates="sept 2020 - dec 2020"
          />
          <WorkLink
            url="https://jarvistechnolabs.com/"
            image="https://res.cloudinary.com/dlfwnm1zp/image/upload/v1665334137/jarvis-technolabs-icon_b2d0es.png"
            name="Jarvis Technolabs"
            dates="2019-2021"
          />
        </Flex>
      </Flex>
      {/* 
      <Text mb={[2, 4]} mt={5} fontWeight="bold">
        Featured Writing
      </Text>
      <Box>
        <Link underline display="block" href="/writing/designing-in-swiftui">
          Designing in SwiftUI
        </Link>

        <Link underline display="block" href="https://react.design/terminal">
          A Designer's Guide to the Terminal
        </Link>

        <Link underline display="block" href="/writing/react-is-for-designers">
          React is for Designers
        </Link>

        <Link underline display="block" href="/writing/on-writing-css">
          On Writing CSS
        </Link>
        <Link underline display="block" href="/writing/my-first-online-course">
          My First Online Course
        </Link>
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
