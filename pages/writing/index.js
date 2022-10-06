import { getSortedPostsData } from "../../lib/posts";
import { Button, Text } from "rebass";
import Date from "../../components/Date";
import Layout from "../../components/Layout";
import Link from "../../components/Link";

function Writing({ allPostsData }) {
  return (
    <Layout>
      <div>
        {allPostsData.map(({ id, date, title }) => (
          <div key={id}>
            <Text
              fontWeight="bold"
              fontSize={[2, 3]}
              color="var(--smoke-dark)"
              mt={[3, 4]}
              mb={[-2, -1]}
            >
              <Date dateString={date} />
            </Text>

            <Link
              href={`/writing/${id}`}
              fontWeight="bold"
              fontSize={[3, "28px"]}
            >
              {title}
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Writing;
