import { useModal } from 'hooks/useModal';

const EditMaterialModal = ({ onClose, onEdit }) => {
  return (
    <div>
      <h2>Модальне вікно для редагування</h2>
      <button
        type="button"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        Редагувати в модалці
      </button>
      <button type="button" onClick={onClose}>
        Закрити
      </button>
    </div>
  );
};

export const Material = ({ item, onDelete, onUpdate }) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  // Кастомний хук useModal() закриває в собі таку логіку:
  // const [isModalOpen, setIsModalOpen] = useState(initialState);
  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <p>
        <b>Назва: </b>
        {item.title}
      </p>
      <p>
        <b>Посилання: </b>
        {item.link}
      </p>
      <button type="button" onClick={() => onDelete(item.id)}>
        Видалити
      </button>
      <button type="button" onClick={openModal}>
        Редагувати
      </button>

      {isModalOpen && (
        <EditMaterialModal
          onClose={closeModal}
          onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
        />
      )}
    </div>
  );
};
