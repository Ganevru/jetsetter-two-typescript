import React, { useCallback } from 'react';

const Filter = ({
  searchTerm,
  onChange,
}: {
  searchTerm: string;
  onChange: Function;
}) => {
  const handleChange = useCallback(
    (event) => {
      const value = event.target.value;
      onChange(value);
    },
    [onChange]
  );

  return (
    <input
      className="Items-searchTerm"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default Filter;
