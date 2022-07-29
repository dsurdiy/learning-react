const Filter = ({ value, onChange }) => {
  return (
    <label>
      Filter by todo's name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
