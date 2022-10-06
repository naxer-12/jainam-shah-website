import Link from "./Link";
import { Text, Flex } from "rebass";

export default function Share() {
  return (
    <Flex
      justifyContent="center"
      width="100%"
      alignItems="center"
      flexDirection="column"
      mt={[5, 6]}
    >
      {/* <Text color="var(--secondary-text)">Enjoy this Article?</Text> */}
      <Link color="var(--link)" href="https://twitter.com/sph_ere">
        Follow on Twitter
      </Link>
    </Flex>
  );
}

export function TwitterIcon() {
  return (
    <svg width="30px" viewBox="0 0 32 26" version="1.1">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M31.992,3.077 C30.815,3.6 29.551,3.953 28.222,4.11 C29.577,3.298 30.618,2.012 31.109,0.48 C29.84,1.231 28.436,1.779 26.941,2.072 C25.743,0.797 24.037,0 22.148,0 C18.523,0 15.586,2.938 15.586,6.563 C15.586,7.077 15.643,7.579 15.755,8.059 C10.3,7.785 5.464,5.172 2.226,1.201 C1.662,2.171 1.338,3.298 1.338,4.501 C1.338,6.779 2.497,8.787 4.257,9.965 C3.182,9.93 2.17,9.636 1.285,9.144 C1.284,9.171 1.284,9.2 1.284,9.226 C1.284,12.407 3.546,15.06 6.549,15.663 C5.999,15.812 5.419,15.893 4.82,15.893 C4.396,15.893 3.986,15.852 3.586,15.776 C4.42,18.382 6.845,20.28 9.716,20.334 C7.471,22.094 4.641,23.145 1.566,23.145 C1.036,23.145 0.513,23.114 0,23.053 C2.904,24.913 6.354,26 10.061,26 C22.133,26 28.736,15.999 28.736,7.325 C28.736,7.041 28.728,6.757 28.716,6.475 C29.999,5.55 31.111,4.395 31.992,3.077 Z"
          id="Path"
          fill="#55ACEE"
        ></path>
      </g>
    </svg>
  );
}
