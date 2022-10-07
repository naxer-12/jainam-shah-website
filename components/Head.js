import React from "react";
import NextHead from "next/head";
import { NextSeo } from "next-seo";

const Head = function (props) {
  const title = props.title ? props.title : "Jainam Shah";
  const description = props.description
    ? props.description
    : "The personal site of Jainam Shah credit by philipcdavis";
  // const image = props.image
  //   ? props.image
  //   : "https://res.cloudinary.com/dpgzvne4j/image/upload/v1604077998/default_ky8gci.png";
  return (
    <>
      <NextHead>
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link
          rel="mask-icon"
          href="/favicons/favicon-flat.svg"
          color="#8A8A8A"
        />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#222222" />
      </NextHead>

      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          // images: [
          //   {
          //     url: image,
          //   },
          // ],
          site_name: "Jainam Shah",
        }}
        twitter={{
          handle: "@sph_ere",
          cardType: "summary_large_image",
        }}
      />
    </>
  );
};

export default Head;
