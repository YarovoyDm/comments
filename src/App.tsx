import React from "react";
import { AddComment } from "components";
import { Comments } from "./containers";

import styles from "./App.module.scss";

const App = () => {
    return (
        <div className={styles.comments}>
            <div className={styles.addCommentBlock}>
                <AddComment />
            </div>
            <div className={styles.commentsBlock}>
                <Comments />
            </div>
        </div>
    );
};

export default App;
