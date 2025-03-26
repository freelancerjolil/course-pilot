"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const ReusableContent = ({
  title,
  children,
  defaultRowsPerPage = 10,
  rowsPerPageOptions = [10, 25, 50, 100, 250],
}) => {
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  return (
    <div>
      <h3 className="font-bold text-2xl py-10">{title}</h3>
      <div className="border-2 rounded-2xl min-h-screen p-10 space-y-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
            <Select
              value={rowsPerPage.toString()}
              onValueChange={(value) => setRowsPerPage(parseInt(value))}
            >
              <SelectTrigger className="w-[120px] p-5">
                <SelectValue placeholder={defaultRowsPerPage.toString()} />
              </SelectTrigger>
              <SelectContent>
                {rowsPerPageOptions.map((option) => (
                  <SelectItem key={option} value={option.toString()}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <h5 className="font-bold text-green-500">Items Per Page</h5>
          </div>
          <div className="relative w-80">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div>
          {children}{" "}
          {/* This is where the specific content (like ReusableTable) will be rendered */}
        </div>
      </div>
    </div>
  );
};

export default ReusableContent;
