import { Provider } from "react-redux";
import { store } from "../Redux/store";
import Layout from "../Global/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};
