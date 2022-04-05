import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function App() {
  const { user } = useUser();

  console.log(user);

  return <h1>Hello World</h1>;
}

export const getServerSideProps = withPageAuthRequired();
