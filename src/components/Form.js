import React from 'react';
import OptionInput from './OptionInput';

function Form({ data, handelChange, loading }) {
  return (
    <div className="form-group">
      <label>Select Date:</label>
      <select
        className="form-control"
        id="exampleFormControlSelect1"
        onChange={handelChange}
      >
        <option defaultValue value="all">All</option>
        {!loading
          ? data.map((item, index) =>
            item.volumeInfo.publishedDate ? (
              <OptionInput key={index} item={item} />
            ) : null,
          )
          : null}
      </select>
    </div>
  );
}

// Export Component
export default Form;




