import { useMemo } from "react";
import API from "./axios";
import "./App.css";
import { API_COMMENTS_ENDPOINT } from "./constants/api";
import Comments from "./containers/Comments/Comments";
import { Box, Stack } from "@mui/joy";

function App() {
    useMemo(() => {}, []);

    return (
        <div>
            <Comments />
        </div>
    );
}

export default App;
