import Router from "next/router";
import { useStore, Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import NProgress from "nprogress";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "material-icons/iconfont/material-icons.css";
import "antd/dist/antd.css";
import { wrapper } from "@/redux/store";
import { GlobalStyle } from "@/styles/global";
import { OverideAntdStyle } from "@/styles/overideAntd";

NProgress.configure({ easing: "ease", speed: 500 });

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("hashChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

const MyApp = ({ Component, pageProps }: any) => {
  const store = useStore();

  return process?.browser ? (
    <PersistGate persistor={(store as any).__persistor}>
      <Component {...pageProps} />
      <GlobalStyle />
      <OverideAntdStyle />
    </PersistGate>
  ) : (
    <Provider store={store}>
      <Component {...pageProps} />
      <GlobalStyle />
      <OverideAntdStyle />
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
