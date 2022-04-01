import LoginRequired from "../components/auth";
import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const Home = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <>
      <LoginRequired>
        {user && (
          <main>
            <h1>Hello {user.attributes.name}</h1>
            <button onClick={signOut}>サインアウト</button>
          </main>
        )}
      </LoginRequired>
    </>
  );
};

export default Home;
