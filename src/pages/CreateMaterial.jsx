import toast from 'react-hot-toast';
import { MaterialEditorForm } from 'components/MaterialEditorForm/MaterialEditorForm';
import { BackLink } from 'components/BackLink/BackLink';
import { useAddMaterialMutation } from 'redux/materialsSlice';

export const CreateMaterialPage = () => {
  const [addMaterial] = useAddMaterialMutation();

  const handleAddMaterial = async values => {
    try {
      await addMaterial(values);
      toast.success('Матеріал додано!');
    } catch (error) {
      toast.error('Помилка при додаванні матеріалу.');
      console.log(error);
    }
  };

  return (
    <>
      <BackLink href="/list" label="К списку материалов" />
      <MaterialEditorForm
        btnText="Добавить материал"
        onSubmit={handleAddMaterial}
      />
    </>
  );
};
