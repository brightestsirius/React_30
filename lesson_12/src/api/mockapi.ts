import axios from "axios";

const API = `https://680fc8ae27f2fdac240f60df.mockapi.io`;

interface ApiService {
    get<T>(endpoint: string, id?: string): Promise<T>;
    delete<T>(endpoint: string, id: string): Promise<T>;
    put<T, U>(endpoint: string, id: string, obj: U): Promise<T>;
    post<T, U>(endpoint: string, obj: U): Promise<T>;
}

const service: ApiService = {
    get: <T>(endpoint: string, id?: string): Promise<T> =>
        axios.get<T>(API + `/${endpoint}` + (id ? `/${id}` : ``)).then(({ data }) => data),
    delete: <T>(endpoint: string, id: string): Promise<T> =>
        axios.delete<T>(API + `/${endpoint}` + `/${id}`).then(({ data }) => data),
    put: <T, U>(endpoint: string, id: string, obj: U): Promise<T> =>
        axios.put<T>(API + `/${endpoint}` + `/${id}`, obj).then(({ data }) => data),
    post: <T, U>(endpoint: string, obj: U): Promise<T> =>
        axios.post<T>(API + `/${endpoint}`, obj).then(({ data }) => data),
};

export default service;