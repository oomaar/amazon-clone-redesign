import { Provider } from "react-redux";
import Layout from "../Global/Layout";
import { store } from "../Redux/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};
