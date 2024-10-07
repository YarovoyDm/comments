export type IComment = {
    body: string;
    id: number;
    likes: number;
    postId: number;
    user: {
        fullName: string;
        id: number;
        username: string;
    };
};

export type IComments = {
    comments: Array<IComment>;
};
