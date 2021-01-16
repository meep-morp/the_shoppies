import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./context/AppContext";

ReactDOM.render(
	<React>
		<AppProvider>
			<App />
		</AppProvider>
	</React>,
	document.getElementById("root")
);
