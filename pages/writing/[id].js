import Head from "../../components/Head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/Layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkdown from "react-markdown/with-html";
import Syntax from "../../components/Syntax";
import Link from "../../components/Link";
import Share from "../../components/Share";
import Image from "next/image";

const renderers = {
  image: ({ src, alt }) => <Image unsized src={src} alt={alt} />,
  link: ({ href, children }) => (
    <Link href={href} underline>
      {children}
    </Link>
  ),
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={Syntax} language={language} children={value} />
    );
  },
};

export default function Post({ postData }) {
  return (
    <Layout>
      <Head title={postData.title} image={postData.image}></Head>
      <ReactMarkdown
        renderers={renderers}
        allowDangerousHtml={true}
        className="post"
        children={postData.contentHtml}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
