import { useEffect } from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import NotFoundSection from "../components/UI/NotFoundSection";
import { PokerFace } from "../components/UI/icons/Faces";
import styles from "../scss/pages/Favorite.module.sass";
import { useManga } from "../store";

const Favorite = () => {
  const favorites = useManga((state) => state.favorites);
  const getFavorites = useManga((state) => state.getFavorites);

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.section}>
        <p className={styles.section__title}>Мои закладки</p>
        <div className={styles.section__list}>
          {favorites.length ? (
            favorites.map((manga) => <Card key={manga.id} {...manga} />)
          ) : (
            <NotFoundSection
              message1="Закладок нет"
              message2="Вы ничего не добавляли в них ..."
              face={<PokerFace />}
            />
          )}
        </div>
      </div>
    </>
  );
};

export { Favorite };
