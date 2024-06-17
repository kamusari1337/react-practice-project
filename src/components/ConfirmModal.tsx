import styles from "../scss/components/ConfirmModal.module.sass";
interface ModalProps {
  setModal: () => void;
}

const ConfirmModal = ({ setModal }: ModalProps) => {
  return (
    <>
      <div className={styles.overlay} onClick={setModal}>
        <div
          className={styles.modal}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={styles.modal__title}>
            Вам на почту отправлен код с подтверждением
          </div>
          <div className={styles.modal__input}>
            <input placeholder="Код"></input>
          </div>
          <div className={styles.modal__button}>Подтвердить</div>
        </div>
      </div>
    </>
  );
};

export { ConfirmModal };
