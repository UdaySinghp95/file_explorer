import { Store, Dispatch, Action } from "redux";

const logger = (store: Store) => (next: Dispatch) => (action: Action) => {
	next(action);
};

export default logger;
