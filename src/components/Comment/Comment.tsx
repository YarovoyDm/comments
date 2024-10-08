import React, { useCallback } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAppDispatch } from "store";
import { removeComment } from "store/comments/slice";
import { IComment } from "types/comments";

import styles from "./Comment.module.scss";

const Comment = (props: { comment: IComment }) => {
    const { postId, user, body, likes } = props.comment;
    const dispatch = useAppDispatch();

    const removeCommentById = useCallback(
        (id: number | string) => () => {
            dispatch(removeComment(id));
        },
        [dispatch],
    );

    return (
        <div className={styles.commentWrapper}>
            <ClearIcon
                className={styles.removeButton}
                onClick={removeCommentById(postId)}
            />
            <div className={styles.author}>
                <div className={styles.authorAvatar}>{user.fullName[0]}</div>
                <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{user.fullName}</div>
                    <div className={styles.authorNickname}>
                        @{user.username}
                    </div>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.comment}>{body}</div>
                <div className={styles.likesWrapper}>
                    <div className={styles.likes}>{likes}</div>
                    <FavoriteBorderIcon className={styles.likeIcon} />
                </div>
            </div>
        </div>
    );
};

export default Comment;
