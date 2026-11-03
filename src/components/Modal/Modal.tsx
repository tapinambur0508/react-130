import { createPortal } from "react-dom";
import css from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  const element = document.getElementById("modal-root");

  if (element === null) {
    alert("Couldn't display modal");
    return null;
  }

  return createPortal(
    <div className={css.backdrop} role="dialog" aria-modal="true">
      <div className={css.modal}>
        <button type="button" className={css.closeBtn} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>,
    element,
  );
}
