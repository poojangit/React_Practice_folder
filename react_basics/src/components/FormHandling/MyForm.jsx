import React, { useState } from 'react';

const MyForm = () => {
    const [value, setValue] = useState('')
    const handleChange = (event) => {
      setValue(event.target.value)
    }
  return (
    <div>
      <form>
        <input type='text' value={value} onChange={handleChange}></input>
        <button type ='submit'>Submit</button>
      </form>
    </div>
  );
}

export default MyForm;
