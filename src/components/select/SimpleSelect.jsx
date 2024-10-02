import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const SimpleSelect = ({ options, value, text, setValue }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectRef = useRef(null);

  const handleSelectOption = (option) => {
    setValue(option);
    setIsDropdownOpen(false);
  };

  const handleRemoveOption = () => {
    setValue({});
  };

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
    <div
      ref={selectRef}
      className="relative w-max min-w-44 hover:cursor-pointer select-none"
    >
      <div
        className="flex items-center h-full px-1 border rounded min-h-8"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className="flex flex-wrap items-center flex-grow">
          {value.id && (
            <div
              key={value.id}
              className="flex items-center bg-gray-100 rounded border border-dashed border-gray-400"
            >
              <span className="px-2">{value.title}</span>
              <button
                className="flex items-center justify-center text-gray-500 bg-transparent hover:bg-red-200 hover:text-red-800 transition-colors duration-300 w-6 h-full focus:outline-none font-extrabold"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveOption();
                }}
              >
                &times;
              </button>
            </div>
          )}
          {!value.id && <p className="p-1 text-sm text-gray-500">{text}</p>}
        </div>
        <div className="h-full flex items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 ml-1 transition-transform ${
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
          {options.length > 0 ? (
            options.map((option) => (
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
              No hay filtros aplicables
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

SimpleSelect.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.object.isRequired,
  text: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

export default SimpleSelect;
