import styles from "./Comment.module.scss";
import React from "react";
import { useAppDispatch } from "store";
import { removeComment } from "store/comments/slice";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IComment } from "types/comments";

const Comment = (props: { comment: IComment }) => {
    const { postId, user, body, likes } = props.comment;
    const dispatch = useAppDispatch();

    const removeCommentById = (id: number) => {
        dispatch(removeComment(id));
    };

    return (
        <div className={styles.commentWrapper}>
            <ClearIcon
                className={styles.removeButton}
                onClick={() => removeCommentById(postId)}
            />
            <div className={styles.author}>
                <div className={styles.fullName}>{user.fullName}</div>
                <div className={styles.userName}>@{user.username}</div>
            </div>
            <div className={styles.main}>{body}</div>
            <div className={styles.likesWrapper}>
                <div className={styles.likes}>{likes}</div>
                <FavoriteBorderIcon className={styles.likeIcon} />
            </div>
        </div>
    );
};

export default Comment;
