import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import * as _ from "lodash";
import TextArea from "components/ui/TextArea/TextArea";
import { useAppDispatch } from "store/index";
import { addComment } from "store/comments/slice";

import styles from "./AddComment.module.scss";

const AddCommentSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(3, "Too Short!")
        .max(15, "Too Long!")
        .required("Required"),
    nickName: Yup.string()
        .min(3, "Too Short!")
        .max(15, "Too Long!")
        .required("Required"),
    comment: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
});

const AddComment = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={styles.AddComment}>
            <Formik
                initialValues={{
                    fullName: "",
                    nickName: "",
                    comment: "",
                }}
                validationSchema={AddCommentSchema}
                onSubmit={(values, { resetForm }) => {
                    dispatch(
                        addComment({
                            body: values.comment,
                            id: _.uniqueId("id_"),
                            likes: 0,
                            postId: _.uniqueId("post_id_"),
                            user: {
                                fullName: values.fullName,
                                username: values.nickName,
                                id: _.uniqueId("user_id_"),
                            },
                        }),
                    );
                    resetForm();
                }}
            >
                {({ errors, touched }) => (
                    <Form className={styles.addCommentForm}>
                        <div className={styles.authorInfo}>
                            <div className={styles.inputWrapper}>
                                <Field
                                    name="fullName"
                                    placeholder="Full name"
                                    className={styles.input}
                                />
                                {errors.fullName && touched.fullName ? (
                                    <div className={styles.error}>
                                        {errors.fullName}
                                    </div>
                                ) : null}
                            </div>

                            <div className={styles.inputWrapper}>
                                <Field
                                    name="nickName"
                                    placeholder="Nickname"
                                    className={styles.input}
                                />
                                {errors.nickName && touched.nickName ? (
                                    <div className={styles.error}>
                                        {errors.nickName}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <div className={styles.textAreaWrapper}>
                            <TextArea
                                name="comment"
                                rows="6"
                                placeholder="Your comment..."
                                className={styles.input}
                            />
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddComment;
