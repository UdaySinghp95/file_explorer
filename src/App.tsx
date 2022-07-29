import { Provider } from "react-redux";

import store from "./store";

import Home from "./view/home";

import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<div className="ap11ctn">
				<Home />
			</div>
		</Provider>
	);
}

export default App;
