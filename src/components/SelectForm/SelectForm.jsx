const SelectForm = ({ selection, hSelection }) => {
  return (
    <div className="formStyle">
      <form>
        <h2>Searching for: {selection}</h2>
        <select className="select" value={selection} onChange={hSelection}>
          <option value={`people`}>People</option>
          <option value={`films`}>Films</option>
        </select>
      </form>
    </div>
  );
};

export default SelectForm;
