import { default as NextLink } from "next/link";
import { Link as RebassLink } from "rebass";
import styles from "../styles/link.module.css";

const Link = ({
  children,
  href,
  className,
  underline = false,
  onClick,
  ...rest
}) => {
  const external = href.startsWith("http");
  return (
    <>
      {external ? (
        <RebassLink
          className={`${className} ${styles.link}`}
          style={underline ? { textDecoration: "underline" } : {}}
          href={href}
          onClick={onClick}
          {...rest}
        >
          {children}
        </RebassLink>
      ) : (
        <NextLink href={href} passHref>
          <RebassLink
            style={underline ? { textDecoration: "underline" } : {}}
            className={`${className} ${styles.link}`}
            href={href}
            onClick={onClick}
            {...rest}
          >
            {children}
          </RebassLink>
        </NextLink>
      )}
    </>
  );
};

export default Link;
