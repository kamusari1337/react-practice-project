import { useState } from "react";
import styles from "../scss/components/Drawer.module.sass";
import { useManga } from "../store";
import { PayModal } from "./PayModal";
import { CartItem } from "./CartItem.tsx";

interface DrawerProps {
  onClose: () => void;
}

const Drawer = ({ onClose }: DrawerProps) => {
  const [modalOpened, setModalOpened] = useState(false);

  const cartItems = useManga((state) => state.cart);
  const cartValue = useManga((state) => state.cartValue);
  const cartItemsLength = cartItems?.length;

  return (
    <>
      {modalOpened && <PayModal onClose={() => setModalOpened(false)} />}
      <div
        className={styles.overlay}
        onClick={() => (!modalOpened ? onClose() : null)}
      >
        <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
          {cartItemsLength > 0 ? (
            <h2 className={styles.title}>Корзина: {cartItems.length}</h2>
          ) : null}
          {cartItems.length > 0 ? (
            <>
              <div className={styles.drawer__cartList}>
                {cartItems.map((item) => {
                  return <CartItem key={"cart" + item.id} {...item} />;
                })}
              </div>
              <div className={styles.drawer__totalBlock}>
                <span>Итого:</span>
                <div></div>
                <span>{cartValue} руб.</span>
              </div>
              <div className={styles.drawer__button}>
                <p onClick={() => setModalOpened(true)}>Оформить заказ</p>
              </div>
            </>
          ) : (
            <div className={styles.drawer__empty}>
              <img src="/icons/empty-cart.png" alt="empty-cart" />
              <p className={styles.drawer__empty__header}>Ваша корзина пуста</p>
              <p>Добавьте хотя бы одну книгу</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export { Drawer };
