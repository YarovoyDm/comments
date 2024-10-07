import React, { useEffect, useState } from "react";
import { fetchComments } from "../../api/fetchComments";
import { AxiosResponse } from "axios";
import { useAppDispatch, useAppSelector } from "../../store";
import { updateComments } from "../../store/comments/slice";
import { selectComments } from "../../store/comments/selectors";
import { IComment } from "../../types/comments";
import Comment from "../../components/Comment/Comment";

import styles from "./Comments.module.scss";

const Comments = () => {
    const [comments, setComments] = useState<Array<IComment> | null>(null);
    const dispatch = useAppDispatch();
    const allComments: Array<IComment> = useAppSelector(selectComments);

    useEffect(() => {
        setComments(allComments);
    }, [allComments]);

    useEffect(() => {
        fetchComments().then((res: AxiosResponse) =>
            dispatch(updateComments(res.data)),
        );
    }, [dispatch]);

    return (
        <div className={styles.commentsWrapper}>
            {comments?.map(comment => {
                return <Comment key={comment.postId} comment={comment} />;
            })}
        </div>
    );
};

export default Comments;
