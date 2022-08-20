import { useState } from 'react';

export const useModal = (initialState = false) => {
  const [isModalOpen, setIsModalOpen] = useState(initialState);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return { isModalOpen, openModal, closeModal };
};

// export const MyCompA = () => {
//   const { isModalOpen, openModal, closeModal } = useModal(true);

//   return null;
// };

// export const MyCompB = () => {
//   const { isModalOpen, openModal, closeModal } = useModal();

//   return null;
// };

// export const MyCompC = () => {
//   const { isModalOpen, openModal, closeModal } = useModal();

//   return null;
// };
