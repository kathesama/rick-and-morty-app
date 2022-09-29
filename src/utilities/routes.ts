export const baseUrl = process.env.REACT_APP_API_URL;

export const getPostUserUrl = () => `${baseUrl}/users`;
export const tokenUserUrl = (token: string) => `${baseUrl}/users/token/${token}`;
