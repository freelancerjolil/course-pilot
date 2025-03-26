
"use client";

import { students } from "@/app/data";
import ReusableContent from "../components/ReusableContent";
import ReusableTable from "../components/ReusableTable";

const MyStudents = () => {
    const columns = [
        { key: "id", header: "ID" },
        { key: "name", header: "Name" },
        { key: "email", header: "Email" },
        { key: "course", header: "Course" },
    ];

    return (
        <ReusableContent title="Students List">
            <ReusableTable data={students} columns={columns} />
        </ReusableContent>
    );
};

export default MyStudents;








// "use client";

// import { useState } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import ReusableTable from "../components/ReusableTable";
// import { students } from "@/app/data";

// const MyStudents = () => {
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const columns = [
//     { key: "id", header: "ID" },
//     { key: "name", header: "Name" },
//     { key: "email", header: "Email" },
//     { key: "course", header: "Course" },
//   ];

//   return (
//     <div>
//       <h3 className="font-bold text-2xl my-5">Students List</h3>
//       <div className="border-2 rounded-2xl min-h-screen p-10 space-y-5">
//         <div className="flex flex-col md:flex-row gap-4 items-center">
//           <Select
//             value={rowsPerPage.toString()}
//             onValueChange={(value) => setRowsPerPage(parseInt(value))}
//           >
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="10" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="10">10</SelectItem>
//               <SelectItem value="25">25</SelectItem>
//               <SelectItem value="50">50</SelectItem>
//               <SelectItem value="100">100</SelectItem>
//               <SelectItem value="250">250</SelectItem>
//             </SelectContent>
//           </Select>
//           <h5>Students Per Page</h5>
//         </div>
//         <div>
//           <ReusableTable data={students} columns={columns} rowsPerPage={rowsPerPage} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyStudents;