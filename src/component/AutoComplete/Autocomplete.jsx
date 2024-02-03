import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Autocomplete = ({ suggestions, width, height, onInputChange }) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    setFiltered(
      suggestions.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
      )
    );
  }, [input, suggestions]);

  const onChange = (e) => {
    const inputValue = e.currentTarget.value;
    setActive(0);
    setInput(inputValue);
    setIsShow(true);
    onInputChange(inputValue);
  };

  const onClick = (suggestion) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(suggestion);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setIsShow(false);
      setInput(filtered[active] || input);
    } else if (e.keyCode === 38) {
      setActive((prev) => (prev === 0 ? prev : prev - 1));
    } else if (e.keyCode === 40) {
      setActive((prev) => (prev === filtered.length - 1 ? prev : prev + 1));
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: -4 },
    visible: { opacity: 1, y: 1 },
  };

  const suggestionListVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const renderAutocomplete = () => (
    <AnimatePresence>
      {isShow && input && (
        <motion.ul
          className="bg-gray-100 border border-gray-300 max-h-44 overflow-auto p-0 w-full  rounded-md mt-1 text-sm absolute top-full left-0 z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={suggestionListVariants}
        >
          {filtered.length ? (
            filtered.map((suggestion, index) => (
              <motion.li
                key={suggestion}
                className={`${
                  index === active ? "active bg-gray-200 " : ""
                } px-3 py-2 cursor-pointer transition duration-300 flex justify-between items-center hover:bg-gray-200 font-inter text-xs`}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                onClick={() => onClick(suggestion)}
              >
                {suggestion}
              </motion.li>
            ))
          ) : (
            <motion.li
              variants={listItemVariants}
              className="px-3 py-2 cursor-pointer transition duration-300 flex justify-between items-center hover:bg-gray-200 font-inter text-xs "
            >
              <em>user not found</em>
            </motion.li>
          )}
        </motion.ul>
      )}
    </AnimatePresence>
  );

  return (
    <div className="relative">
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
        placeholder="Search for a supplier"
        className={`bg-inputColor rounded-lg p-2 w-full sm:w-56 md:w-${
          width || "50"
        } text-sm mb-1 outline-none sm:h-10 md:h-${height || "10"}`}
      />
      {renderAutocomplete()}
    </div>
  );
};

export default Autocomplete;
