import { Authenticator } from "@aws-amplify/ui-react";
import { I18n } from "aws-amplify";
import dictionary from "../lib/dictionary";

// 日本語化
I18n.putVocabularies(dictionary);
I18n.setLanguage("ja");

const MyApp = ({ Component, pageProps }) => {
  return (
    <Authenticator.Provider>
      <Component {...pageProps} />
    </Authenticator.Provider>
  );
};

export default MyApp;
