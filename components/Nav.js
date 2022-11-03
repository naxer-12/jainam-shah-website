import React from "react";
import styles from "../styles/nav.module.css";
import { useRouter } from "next/router";
import { Flex, Box } from "rebass";
import Link from "./Link";
import Spotlight from "./Spotlight";

export default function Nav() {
  const { asPath } = useRouter();

  return (
    <Flex my={[4, 5]} alignItems="center">
      <Spotlight className={styles.logo}>⌘</Spotlight>
      <Box flexGrow={1}></Box>
      <Link
        href="https://github.com/naxer-12/resume/blob/e0f82c50c9b4c702e500dde3dc6d1028322765c6/JainamShahResume.pdf"
        target="_blank"
      >
        Resume
      </Link>

      {/* <Link
        href="/writing"
        ml={[3, 4]}
        className={
          (styles.link,
          asPath === "/writing" ? (styles.link, styles.active) : styles.link)
        }
      >
        Writing
      </Link> */}
    </Flex>
  );
}
