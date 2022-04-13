import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import {
  useGetProductsQuery,
  useMeQuery,
} from "../../graphql/generated/graphql";
import {
  getServerPageGetProducts,
  ssrGetProducts,
} from "../../graphql/generated/page";
import { withApollo } from "../../lib/withApollo";

function Home({ data }) {
  const { data: me } = useMeQuery();

  console.log(me);

  return (
    <div className="text-violet-500">
      <h1>Hello World</h1>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    // return getServerPageGetProducts({}, ctx);

    return {
      props: {},
    };
  },
});

export default withApollo(ssrGetProducts.withPage()(Home));
