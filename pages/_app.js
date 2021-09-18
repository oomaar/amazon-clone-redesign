import { Provider } from "react-redux";
import { persistor, store } from "../Redux/store";
import Layout from "../Global/Layout";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as AuthProvider } from "next-auth/client";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
};