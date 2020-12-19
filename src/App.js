import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import "./global.css";

function App() {
	return (
		<Router>
			<Nav />
			<Route exact path="/" component={Home} />
		</Router>
	);
}

export default App;
