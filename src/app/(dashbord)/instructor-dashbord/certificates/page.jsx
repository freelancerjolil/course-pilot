// src/app/teacher-dashbord/certificates/page.jsx
"use client";
import { certificates } from "@/app/data"; // Assuming you have certificate data
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import ReusableContent from "../components/ReusableContent";
import ReusableTable from "../components/ReusableTable";

const Certificates = () => {
  const columns = [
    { key: "id", header: "#", className: "w-[5%]" },
    { key: "name", header: "Certificate Name" },
    { key: "student", header: "Student Name" },
    { key: "course", header: "Course" },
    { key: "issueDate", header: "Issue Date" },
  ];

  const actions = (item) => (
    <Button size="icon" variant="outline">
      <Download className="h-4 w-4" />
    </Button>
  );

  return (
    <ReusableContent title="Certificates">
      {" "}
      {/* <----- PASSED A STRING */}
      <ReusableTable data={certificates} columns={columns} actions={actions} />
    </ReusableContent>
  );
};

export default Certificates;
