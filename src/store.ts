import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  addToUserCart,
  addToUserFavorite,
  auth,
  getSimilar,
  getUserCart,
  getUserFavorite,
  getUserManga,
  getUserPopularManga,
  removeAllFromUserCart,
  removeFromUserCart,
  removeFromUserFavorite,
} from "./api";
import { Cart, Manga, MangaStore, UserStore } from "./interfaces";

export const useManga = create(
  persist<MangaStore>(
    (set, get) => ({
      userId: JSON.parse(localStorage.getItem("user")!),
      mangas: [],
      popular: [],
      cart: [],
      cartValue: 0,
      favorites: [],
      purchases: [],
      similarManga: [],
      getManga: async () => {
        const mangas: Manga[] = await getUserManga(get().userId);
        const popular: Manga[] = await getUserPopularManga(get().userId);
        set({ mangas: mangas, popular: popular });
      },

      getCart: async () => {
        const { cart, amount_of_buying }: Cart = await getUserCart(
          get().userId,
        );
        set({ cart: cart });
        set({ cartValue: amount_of_buying });
      },

      getFavorites: async () => {
        const favorites: Manga[] = await getUserFavorite(get().userId);
        set({ favorites: favorites });
      },

      getPurchased: async () => {
        const purchases: Manga[] = await getUserManga(get().userId);
        set({ purchases: purchases });
      },

      getSimilarManga: async (id) => {
        const similarManga: Manga[] = await getSimilar(id);
        set({ similarManga: similarManga });
      },

      addToCart: async (manga: Manga) => {
        const { cart, amount_of_buying }: Cart = await addToUserCart(
          get().userId,
          manga.id,
        );
        set({ cart: cart });
        set({ cartValue: amount_of_buying });

        set({
          mangas: get().mangas.map((item) =>
            item.id === manga.id ? { ...item, inCart: item.inCart + 1 } : item,
          ),
        });
        set({
          popular: get().popular.map((item) =>
            item.id === manga.id ? { ...item, inCart: item.inCart + 1 } : item,
          ),
        });
        set({
          favorites: get().favorites.map((item) =>
            item.id === manga.id ? { ...item, inCart: item.inCart + 1 } : item,
          ),
        });
      },

      removeFromCart: async (id: number) => {
        const { cart, amount_of_buying }: Cart = await removeFromUserCart(
          get().userId,
          id,
        );
        set({ cart: cart });
        set({ cartValue: amount_of_buying });

        set({
          mangas: get().mangas.map((item) =>
            item.id === id ? { ...item, inCart: item.inCart - 1 } : item,
          ),
        });
        set({
          popular: get().popular.map((item) =>
            item.id === id ? { ...item, inCart: item.inCart - 1 } : item,
          ),
        });
        set({
          favorites: get().favorites.map((item) =>
            item.id === id ? { ...item, inCart: item.inCart - 1 } : item,
          ),
        });
      },

      removeAllFromCart: async (id: number) => {
        const { cart, amount_of_buying }: Cart = await removeAllFromUserCart(
          get().userId,
          id,
        );
        set({ cart: cart });
        set({ cartValue: amount_of_buying });

        set({
          mangas: get().mangas.map((item) =>
            item.id === id ? { ...item, inCart: 0 } : item,
          ),
        });
        set({
          popular: get().popular.map((item) =>
            item.id === id ? { ...item, inCart: 0 } : item,
          ),
        });
        set({
          favorites: get().favorites.map((item) =>
            item.id === id ? { ...item, inCart: 0 } : item,
          ),
        });
      },

      addToFavorite: async (manga: Manga) => {
        await addToUserFavorite(get().userId, manga.id);

        manga.isFavorite = true;
        set({ favorites: [...get().favorites, manga] });

        set({
          mangas: get().mangas.map((item) =>
            item.id === manga.id ? { ...item, isFavorite: true } : item,
          ),
        });

        set({
          popular: get().popular.map((item) =>
            item.id === manga.id ? { ...item, isFavorite: true } : item,
          ),
        });
      },

      removeFromFavorite: async (id: number) => {
        await removeFromUserFavorite(get().userId, id);
        const newFavorites = get().favorites.filter((item) => item.id !== id);
        set({ favorites: newFavorites });
        set({
          mangas: get().mangas.map((item) =>
            item.id === id ? { ...item, isFavorite: false } : item,
          ),
        });
        set({
          popular: get().popular.map((item) =>
            item.id === id ? { ...item, isFavorite: false } : item,
          ),
        });
      },
    }),
    { name: "mangas" },
  ),
);

export const useUser = create(
  persist<UserStore>(
    (set, get) => ({
      userId: 1,
      username: "user123",
      password: "123",
      isAuth: false,
      setLogin: (login) => set({ username: login }),
      setPassword: (password) => set({ password: password }),
      getUser: async () => {
        const response = await auth(get().username, get().password);
        set({ userId: response.id, isAuth: true });
      },
      exit: () => {
        set({ userId: null, isAuth: false });
      },
    }),
    { name: "user" },
  ),
);
