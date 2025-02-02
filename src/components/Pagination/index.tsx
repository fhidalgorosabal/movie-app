import { useEffect, useState } from "react";
import { MdNavigateBefore, MdNavigateNext, MdLastPage, MdFirstPage } from "react-icons/md";
import "./styles.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  totalPages = totalPages > 500 ? 500 : totalPages;  
  const [pages, setPages] = useState<(number | null)[]>([]);

  useEffect(() => {
    const pagesArray: (number | null)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pagesArray.push(i);
    } else {
      if (currentPage <= 3) {
        pagesArray.push(1, 2, 3, null, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pagesArray.push(1, null, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pagesArray.push(1, null, currentPage - 1, currentPage, currentPage + 1, null, totalPages);
      }
    }
    
    setPages(pagesArray);
  }, [currentPage, totalPages]);

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        <MdFirstPage size={20}/>
      </button>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <MdNavigateBefore size={20}/>
      </button>

      {pages.map((page, index) => page !== null 
        ? (
            <button
              key={index}
              className={currentPage === page ? "active" : "inactive"}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ) 
        : <span key={index} className="ellipsis">...</span>
      )}

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <MdNavigateNext size={20}/>
      </button>
      <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
        <MdLastPage size={20}/>
      </button>
    </div>
  );
};
