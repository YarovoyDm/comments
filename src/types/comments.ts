export type IComment = {
    body: string;
    id: number | string;
    likes: number;
    postId: number | string;
    user: {
        fullName: string;
        id: number | string;
        username: string;
    };
};

export type IComments = {
    comments: Array<IComment>;
};
