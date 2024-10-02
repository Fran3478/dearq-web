import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxVisibleButtons = 5;
  const halfRange = Math.floor(maxVisibleButtons / 2);
  const getStartPage = () => {
    if (currentPage <= halfRange + 1) {
      return 1;
    }
    if (currentPage >= totalPages - halfRange) {
      return totalPages - maxVisibleButtons + 1;
    }
    return currentPage - halfRange;
  };

  const startPage = Math.max(getStartPage(), 1);
  const endPage = Math.min(startPage + maxVisibleButtons - 1, totalPages);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 border rounded ${
            i === currentPage
              ? "bg-blue-500 text-white border-blue-500"
              : "border-gray-300"
          }`}
        >
          {i}
        </button>,
      );
    }
    return pageButtons;
  };

  return (
    <div className="flex justify-center space-x-2">
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded border-gray-300 disabled:opacity-50"
      >
        &laquo;
      </button>

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded border-gray-300 disabled:opacity-50"
      >
        &lsaquo;
      </button>

      {renderPageButtons()}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded border-gray-300 disabled:opacity-50"
      >
        &rsaquo;
      </button>

      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded border-gray-300 disabled:opacity-50"
      >
        &raquo;
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default Pagination;
