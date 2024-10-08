import React from "react";
import { useField } from "formik";

import styles from "./TextArea.module.scss";

interface IProps {
    className: string;
    name: string;
    placeholder: string;
    rows: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
}

const TextArea = (props: IProps) => {
    const [field, meta] = useField(props);

    return (
        <>
            <textarea {...field} {...props} rows={Number(props.rows)} />
            {meta.touched && meta.error ? (
                <div className={styles.error}>{meta.error}</div>
            ) : null}
        </>
    );
};

export default TextArea;
