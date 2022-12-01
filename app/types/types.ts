export interface Register {
    name: string;
    user: string;
    email: string;
    password: string;
    post?: string;
}

export interface UserShape {
    user: string;
    post: string;
}

const user: UserShape[] = [
    {
    'user' : 'selfmadesamuel',
    'post' : 'post'
    }
];
export default user;


export interface FireRegisterResponse {
    data: () => Register;
}

export interface FireCollectionResponse<T> {
    docs: T[];
}