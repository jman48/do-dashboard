import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagasToRun from "./sagas";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  blacklist: ["auth"]
};
const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(sagaMiddleware)
    )
  );
  const persistor = persistStore(store, null);
  sagaMiddleware.run(sagasToRun);
  return { store, persistor };
};
