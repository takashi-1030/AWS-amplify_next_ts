import { configure } from "../../src/my-aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import { FC } from "react";

configure();

export const LoginRequired: FC = ({ children }) => {
  return (
    <Authenticator signUpAttributes={["name"]}>
      {() => <>{children}</>}
    </Authenticator>
  );
};

export default LoginRequired;
