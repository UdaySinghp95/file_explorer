import { Provider } from "react-redux";

import { store } from "./store";

import Home from "./view/Home/Home";

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
