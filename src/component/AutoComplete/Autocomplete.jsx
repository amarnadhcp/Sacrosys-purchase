import React, { useState, useEffect } from "react";
import "./Auto.css";

const Autocomplete = ({ suggestions }) => {
  // State initialization
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");

  // Filter suggestions when input changes
  useEffect(() => {
    setFiltered(
      suggestions.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
      )
    );
  }, [input, suggestions]);

  // Handle input change
  const onChange = (e) => {
    const inputValue = e.currentTarget.value;
    setActive(0);
    setInput(inputValue);
    setIsShow(true);
  };

  // Handle suggestion click
  const onClick = (suggestion) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(suggestion);
  };

  // Handle keyboard events
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // Enter key
      setIsShow(false);
      setInput(filtered[active]);
    } else if (e.keyCode === 38) {
      // Up arrow
      setActive((prev) => (prev === 0 ? prev : prev - 1));
    } else if (e.keyCode === 40) {
      // Down arrow
      setActive((prev) => (prev === filtered.length - 1 ? prev : prev + 1));
    }
  };

  // Render autocomplete dropdown
  const renderAutocomplete = () => {
    if (isShow && input) {
      return (
        <ul className="autocomplete" >
          {filtered.length ? (
            filtered.map((suggestion, index) => (
              <li
                className={index === active ? "active" : ""}
                key={suggestion}
                onClick={() => onClick(suggestion)}
              >
                {suggestion}
              </li>
            ))
          ) : (
            <li className="">
              <em>No suggestions found</em>
            </li>
          )}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
        className="autocomplete-input"
      />
      {renderAutocomplete()}
    </div>
  );
};

export default Autocomplete;


