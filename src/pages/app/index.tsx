import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useGetProductsQuery } from "../../graphql/generated/graphql";
import {
  getServerPageGetProducts,
  ssrGetProducts,
} from "../../graphql/generated/page";
import { withApollo } from "../../lib/withApollo";

function Home() {
  const { user } = useUser();
  const { data, loading, error } = useGetProductsQuery();

  console.log(user, data);

  return <h1>Hello World</h1>;
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    const data = await getServerPageGetProducts(null, ctx);

    return {
      props: data.props,
    };
  },
});

export default withApollo(ssrGetProducts.withPage()(Home));
