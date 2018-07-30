import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "../modules/auth/reducers";
import droplets from "../modules/droplets/reducers";

const authPersistConfig = {
  key: "auth",
  storage,
  blacklist: ["failure"]
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  droplets
});

export default rootReducer;
