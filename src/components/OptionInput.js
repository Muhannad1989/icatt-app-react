import React from 'react';

function OptionInput({ item }) {
  return (
    <option value={item.volumeInfo.publishedDate}>
      {item.volumeInfo.publishedDate}
    </option>
  );
}

export default OptionInput;
