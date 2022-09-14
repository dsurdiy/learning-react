import axios from 'axios';

export default function UploadView() {
  const handleSubmit = e => {
    e.preventDefault();
    const file = e.target.file.files[0];
    const formData = new FormData();
    formData.append('image', file, file.name);

    axios.post('url', formData).then(console.log).catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" />
      <button type="button">Загрузить</button>
    </form>
  );
}
