import { useMemo } from "react";
import API from "./axios";
import "./App.css";
import { API_COMMENTS_ENDPOINT } from "./constants/api";

function App() {
    useMemo(() => {
        API.get(API_COMMENTS_ENDPOINT).then(res => console.log("res", res));
    }, []);

    return <div className="App">1</div>;
}

export default App;
