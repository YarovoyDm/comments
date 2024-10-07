import React from "react";
import AddComment from "components/AddComment/AddComment";
import Comments from "./containers/Comments/Comments";

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
