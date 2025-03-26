"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableFooter,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationPrevious,
  PaginationNext,
  PaginationItem,
} from "@/components/ui/pagination";

export default function ReusableTable({ data, columns, rowsPerPage = 10, actions }) {
  if (!data) return <div>Loading Table...</div>;
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [rowsPerPage]);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow className={"bg-green-400"}>
            {columns.map((column) => (
              <TableHead key={column.key} className={column.className}>
                {column.header}
              </TableHead>
            ))}
            {actions && <TableHead className="w-[10%]">Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item) => (
            <TableRow key={item.id}>
              {columns.map((column) => (
                <TableCell key={column.key}>{item[column.key]}</TableCell>
              ))}
              {actions && (
                <TableCell>
                  <div className="flex gap-2">{actions(item)}</div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={columns.length + (actions ? 1 : 0)}>
              <Pagination>
                <PaginationContent>
                  <PaginationPrevious
                    onPageChange={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                  />
                  {getPageNumbers().map((pageNum) => (
                    <PaginationItem
                      key={pageNum}
                      page={pageNum}
                      onPageChange={() => handlePageChange(pageNum)}
                      isActive={pageNum === page}
                    >
                      {pageNum}
                    </PaginationItem>
                  ))}
                  <PaginationNext
                    onPageChange={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                  />
                </PaginationContent>
              </Pagination>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

