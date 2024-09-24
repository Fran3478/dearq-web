import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const MultiSelect = ({ values, text, setValues }) => {
  const [options, setOptions] = useState(values);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [filter, setFilter] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectRef = useRef(null);

  const handleInputChange = ({ target }) => {
    setFilter(target.value);
    setIsDropdownOpen(true);
  };

  const handleSelectOption = (option) => {
    setSelectedOptions([...selectedOptions, option]);
    setOptions(options.filter((opt) => opt.id !== option.id));
    setFilter("");
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions(selectedOptions.filter((opt) => opt.id !== option.id));
    setOptions([...options, option]);
  };

  const filteredOptions = options.filter((option) =>
    option.title.toLowerCase().includes(filter.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectRef} className="relative w-full">
      <div
        className="flex items-center h-full p-2 border border-gray-300 rounded min-h-[40px] space-x-2"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className="flex flex-wrap items-center flex-grow">
          {selectedOptions.map((option) => (
            <div
              key={option.id}
              className="flex items-center bg-gray-200 text-gray-800 mr-2 mb-2 rounded"
            >
              <span className="px-2">{option.title}</span>
              <button
                className="flex items-center justify-center text-gray-500 bg-transparent hover:bg-red-200 hover:text-red-800 transition-colors duration-300 w-6 h-full focus:outline-none font-extrabold"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveOption(option);
                }}
              >
                &times;
              </button>
            </div>
          ))}
          <input
            type="text"
            value={filter}
            onChange={handleInputChange}
            onClick={(e) => e.stopPropagation()}
            onFocus={() => setIsDropdownOpen(true)}
            placeholder={selectedOptions.length === 0 ? text : ""}
            className="flex-grow p-1 outline-none text-sm"
          />
        </div>
        <div className="border-l h-full flex items-center pl-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 ml-2 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {isDropdownOpen && (
        <ul className="absolute z-10 w-full max-h-40 mt-1 overflow-y-auto bg-white border border-gray-300 rounded shadow-lg">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li
                key={option.id}
                onClick={() => handleSelectOption(option)}
                className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
              >
                {option.title}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500 italic">
              No se encontraron resultados
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

MultiSelect.propTypes = {
  values: PropTypes.array.isRequired,
  text: PropTypes.string,
};

export default MultiSelect;
