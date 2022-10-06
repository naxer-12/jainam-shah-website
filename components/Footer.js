import React from "react";
import { Box } from "rebass";
import Link from "./Link";
import styles from "../styles/footer.module.css";

function Footer(props) {
  return (
    <Box className={styles.footer}>
      <Link fontSize={[3, 4]} href="https://www.linkedin.com/in/jainmshah/">
        @jainamshah
      </Link>
    </Box>
  );
}

export default Footer;
