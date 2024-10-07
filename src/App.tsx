import React from "react";
import Comments from "./containers/Comments/Comments";

import styles from "./App.module.scss";

function App() {
    return (
        <div className={styles.comments}>
            <Comments />
        </div>
    );
}

export default App;
