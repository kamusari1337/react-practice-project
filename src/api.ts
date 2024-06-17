import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllManga = async <Manga>() => {
  const response = await API.get<Manga>("/manga");
  return response.data;
};

export const getPopularManga = async <Manga>() => {
  const response = await API.get<Manga>("/top_manga");
  return response.data;
};

export const auth = async (username: string, psw: string) => {
  const response = await API.post("/auth", {
    username: username,
    psw: psw,
  });
  return response.data;
};

export const registerUser = async (
  username: string,
  psw: string,
  email: string,
) => {
  const response = await API.post("/users", {
    username: username,
    psw: psw,
    email: email,
  });
  return response.data;
};

export const getUserManga = async <Manga>(id: number) => {
  const response = await API.get<Manga>(`/users/${id}/manga`);
  return response.data;
};

export const getUserPopularManga = async <Manga>(id: number) => {
  const response = await API.get<Manga>(`/users/${id}/top_manga`);
  return response.data;
};

export const getUserCart = async <Cart>(id: number) => {
  const response = await API.get<Cart>(`/users/${id}/cart`);
  return response.data;
};

export const getUserFavorite = async <Manga>(id: number) => {
  const response = await API.get<Manga>(`/users/${id}/favorite`);
  return response.data;
};

export const getSimilar = async <Manga>(id: number) => {
  const response = await API.get<Manga>(`/similar_manga/${id}`);
  return response.data;
};

export const addToUserCart = async <Cart>(id: number, mangaId: number) => {
  const response = await API.post<Cart>(`/users/${id}/cart`, {
    manga_id: mangaId,
  });
  return response.data;
};

export const removeFromUserCart = async <Cart>(id: number, mangaId: number) => {
  const response = await API.delete<Cart>(`/users/${id}/cart`, {
    data: {
      manga_id: mangaId,
    },
  });
  return response.data;
};

export const removeAllFromUserCart = async <Cart>(
  id: number,
  mangaId: number,
) => {
  const response = await API.delete<Cart>(`/users/${id}/cart/all`, {
    data: {
      manga_id: mangaId,
    },
  });
  return response.data;
};

export const addToUserFavorite = async (id: number, mangaId: number) => {
  await API.post<number>(`/users/${id}/favorite`, {
    manga_id: mangaId,
  });
};

export const removeFromUserFavorite = async (id: number, mangaId: number) => {
  await API.delete<number>(`/users/${id}/favorite`, {
    data: {
      manga_id: mangaId,
    },
  });
};
