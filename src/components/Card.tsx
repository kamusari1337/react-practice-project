import { Link } from "react-router-dom";
import styles from "../scss/components/Card.module.sass";
import { useManga } from "../store";
import { Like, LikeFilled, MinusFilled, Plus, PlusFilled } from "./UI/Buttons";
import { memo } from "react";

interface CardProps {
  id: number;
}

const Card = memo(({ id }: CardProps) => {
  const addToCart = useManga((state) => state.addToCart);
  const removeFromCart = useManga((state) => state.removeFromCart);

  const addToFavorite = useManga((state) => state.addToFavorite);
  const removeFromFavorite = useManga((state) => state.removeFromFavorite);

  const manga = useManga((state) => state.mangas[id - 1]);

  const onClickFavorite = () => {
    manga.isFavorite ? removeFromFavorite(id) : addToFavorite(manga);
  };

  const onClickPlus = () => {
    addToCart(manga);
  };

  const onClickMinus = () => {
    removeFromCart(manga.id);
  };

  return (
    <>
      <div className={styles.card}>
        <Link to={`/manga/${manga.id}`}>
          <img
            className={styles.card__cover}
            src={manga.wrap_path}
            alt="manga-cover"
          />
        </Link>
        <div className={styles.cart__info}>
          <p className={styles.card__title}>{manga.title}</p>
          <div className={styles.card__bottomLine}>
            <div className={styles.bottomLine__left}>
              <p>Цена:</p>
              <p>{manga.price} руб.</p>
            </div>
            <div className={styles.bottomLine__right}>
              {manga.isFavorite ? (
                <LikeFilled onClick={onClickFavorite} />
              ) : (
                <Like onClick={onClickFavorite} />
              )}
              <div className={styles.card__addButtons}>
                {manga.inCart > 0 ? (
                  <>
                    <MinusFilled onClick={onClickMinus} />
                    <b className={styles.card__amount}>{manga.inCart}</b>
                    <PlusFilled onClick={onClickPlus} />
                  </>
                ) : (
                  <Plus onClick={onClickPlus} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export { Card };
