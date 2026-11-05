import { useState } from "react";

// const [a1, __, ___, ____, a5, _____, ____, ____, ______, a10] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// console.log({a1, a5, a10, __})

// const {a, d} = {a: 1, b: 2, c: 3, d: 4};

export function useModal(initialIsOpen: boolean = false): {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
} {
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
}
