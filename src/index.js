import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./Reducers/reducer";

const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);