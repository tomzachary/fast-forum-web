import styles from "./modal.module.scss";
export interface ModalProps {
  title?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose: () => void;
}

export const Modal = ({
  title,
  isOpen = true,
  children,
  onClose,
}: ModalProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className={`${styles.modal} ${isOpen ? styles.modalOpen : styles.modalClose}`}
      data-testid="modal"
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={() => handleClose()}>
          &times;
        </span>
        <h2 className={styles.modalTitle}>{title}</h2>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
};
