import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NominatedList from "./components/NominatedList";
import "./global.css";

function App() {
	return (
		<Router>
			<Nav />
			<Route exact path="/" component={Home} />
			<NominatedList />
		</Router>
	);
}

export default App;
