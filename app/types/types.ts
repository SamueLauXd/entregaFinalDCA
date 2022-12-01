export interface Register {
    name: string;
    user: string;
    email: string;
    password: string;
    post?: string;
}


export interface FireRegisterResponse {
    data: () => Register;
}

export interface FireCollectionResponse<T> {
    docs: T[];
}