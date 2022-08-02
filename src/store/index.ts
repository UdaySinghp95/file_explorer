import { createStore } from "redux";

import rootReducer from "./reducer";

const store = createStore(rootReducer);

store.subscribe(() => {
	localStorage.setItem("file-explorer", JSON.stringify(store.getState()));
});

export { store };
