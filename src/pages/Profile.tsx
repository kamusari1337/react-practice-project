import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { SadFace } from "../components/UI/icons/Faces";
import NotFoundSection from "../components/UI/NotFoundSection";
import styles from "../scss/pages/Profile.module.sass";
import { useManga } from "../store";

const Profile = () => {
  const purchases = useManga((state) => state.purchases);
  const purchasesAmount = purchases.length;

  return (
    <>
      <Header />
      <div className={styles.section}>
        <div className={styles.section__title}>Мои покупки</div>
        <div className={styles.section__list}>
          {purchasesAmount > 0 ? (
            purchases.map((manga) => <Card key={manga.id} {...manga}></Card>)
          ) : (
            <NotFoundSection
              message1="У вас нет заказов"
              message2="Оформите хотя бы один заказ..."
              face={<SadFace />}
            />
          )}
        </div>
      </div>
    </>
  );
};

export { Profile };
