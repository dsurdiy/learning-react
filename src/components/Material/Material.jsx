import { useNavigate } from 'react-router-dom';
import { useDeleteMaterialMutation } from 'redux/materialsSlice';

export const Material = ({ item }) => {
  const navigate = useNavigate();
  const [deleteMaterial, { isLoading }] = useDeleteMaterialMutation();

  return (
    <div>
      <p>
        <b>Название:</b> {item.title}
      </p>
      <p>
        <b>Ссылка:</b> {item.link}
      </p>
      <button
        type="button"
        disabled={isLoading}
        onClick={() => deleteMaterial(item.id)}
      >
        Удалить
      </button>
      <button type="button" onClick={() => navigate(`/list/edit/${item.id}`)}>
        Редактировать
      </button>
    </div>
  );
};
