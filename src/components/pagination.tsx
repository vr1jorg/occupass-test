import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import type { PaginationProps } from '../types';

export default function Pagination({currentPage, setCurrentPage}: PaginationProps) {
  const totalPages = 3;
  return (
    <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
    />
  )
}

