import PropTypes from "prop-types";

const SidebarButton = ({ content, selected = false, handleSelect }) => {
  return (
    <div>
      <button
        onClick={() => {
          handleSelect();
        }}
        className={`w-full py-3 text-left hover:bg-[#ff8211]/10 transition-colors ${selected ? "bg-[#ff8211]/10 border-l-4 border-[#ff8211] pl-7 text-[#ff8211]" : "text-gray-700 pl-8"}`}
      >
        <span className="flex items-center gap-2">
          {content.icon}
          {content.text}
        </span>
      </button>
    </div>
  );
};

SidebarButton.propTypes = {
  content: PropTypes.object,
  selected: PropTypes.bool,
  handleSelect: PropTypes.func,
};

export default SidebarButton;
