import { applyMiddleware, createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "@/redux/reducer";

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const makeConfiguredStore = (reducer: any) => {
  const store = createStore(reducer, undefined, bindMiddleware([]));
  return store;
};

let persistor = null;

const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore(rootReducer);
  } else {
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "my_app",
      storage,
      whitelist: ["Layout"],
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = makeConfiguredStore(persistedReducer);

    persistor = persistStore(store);
    (store as any).__persistor = persistor;

    return store;
  }
};

const wrapper = createWrapper(makeStore, { debug: false });

export { wrapper, persistor };
