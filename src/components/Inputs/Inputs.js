import React from "react";
import classes from './Inputs.module.scss';

function Inputs() {
  const [values, setValue] = React.useState([]);
  const [texts, setText] = React.useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addNewText = (e) => {
    e.preventDefault();
    setValue([...values, texts]);
    setText([""]);
  };

  return (
    <div className={classes.Inputs}>
      <h2 className={classes.title}>Составьте список ваших финансовых целей</h2>
      <div className={classes.inputWrapper}> 
        <input className={classes.input} value={texts} onChange={handleChange} />
        <button type="submit" onClick={addNewText}>
          OK
        </button>
      </div>
      <ul className={classes.lists}>
        {values.map((item, index) => (
          <li key={index}>
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </div >
  );
}

export default Inputs;