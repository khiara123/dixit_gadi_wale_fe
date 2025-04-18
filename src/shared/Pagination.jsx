import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPaginationRange = () => {
    const totalNumbers = 5;
    const totalBlocks = totalNumbers + 2; // Includes first and last

    if (totalPages <= totalBlocks) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - 1, 1);
    const rightSiblingIndex = Math.min(currentPage + 1, totalPages);

    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPages - 2;

    const firstPage = 1;
    const lastPage = totalPages;

    if (!showLeftDots && showRightDots) {
      const leftRange = Array.from({ length: 3 }, (_, i) => i + 1);
      return [...leftRange, '...', totalPages];
    }

    if (showLeftDots && !showRightDots) {
      const rightRange = Array.from({ length: 3 }, (_, i) => totalPages - 2 + i);
      return [firstPage, '...', ...rightRange];
    }

    if (showLeftDots && showRightDots) {
      return [
        firstPage,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        lastPage
      ];
    }
  };

  const paginationRange = getPaginationRange();

  const handleClick = (page) => {
    if (page !== '...') {
      onPageChange(page);
    }
  };

  return (
    <div className="d-flex justify-content-end mt-3">
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              onClick={() => onPageChange(1)}
              className="page-link"
              disabled={currentPage === 1}
            >
              First
            </button>
          </li>
          <li className="page-item">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              className="page-link"
              disabled={currentPage === 1}
            >
              Prev
            </button>
          </li>

          {paginationRange.map((page, idx) => (
            <li key={idx} className={`page-item ${page === currentPage ? 'active' : ''}`}>
              <button
                onClick={() => handleClick(page)}
                className="page-link"
                disabled={page === '...'}
              >
                {page}
              </button>
            </li>
          ))}

          <li className="page-item">
            <button
              onClick={() => onPageChange(currentPage + 1)}
              className="page-link"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
          <li className="page-item">
            <button
              onClick={() => onPageChange(totalPages)}
              className="page-link"
              disabled={currentPage === totalPages}
            >
              Last
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
