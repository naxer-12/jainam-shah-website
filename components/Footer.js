import React from "react";
import { Box } from "rebass";
import Link from "./Link";
import Image from "next/image";
import styles from "../styles/footer.module.css";

function Footer(props) {
  return (
    <Box className={styles.footer}>
      <Link fontSize={[3, 4]} href="https://github.com/naxer-12/">
        <Image
          src="https://res.cloudinary.com/dlfwnm1zp/image/upload/v1666982635/icons8-github-50_dy5zpq.png"
          width={50}
          height={50}
        />
      </Link>
      <Link fontSize={[3, 4]} href="https://www.linkedin.com/in/jainmshah/">
        <Image
          src="https://res.cloudinary.com/dlfwnm1zp/image/upload/v1666982708/icons8-linkedin-100_xu7jh9.png"
          width={50}
          height={50}
        />
      </Link>
      <Link fontSize={[3, 4]} href="mailto:jainamshah395@gmail.com">
        <Image
          src="https://res.cloudinary.com/dlfwnm1zp/image/upload/v1666982863/icons8-gmail-logo-100_qenoer.png"
          width={50}
          height={50}
        />
      </Link>
    </Box>
  );
}

export default Footer;
