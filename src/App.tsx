import Home from "./view/home";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";

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
