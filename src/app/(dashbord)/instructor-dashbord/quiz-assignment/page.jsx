import React from "react";
import ReusableContent from "../components/ReusableContent";
import ReusableTable from "../components/ReusableTable";
import { assignments } from "@/app/data";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

const QuizAndAssignment = () => {
    const columns = [
        { key: "id", header: "#", className: "w-[5%]" },
        { key: "title", header: "Quiz Title" },
        { key: "course", header: "Course" },
        { key: "dueDate", header: "Due Date" },
        { key: "totalQuestions", header: "Questions" },
        { key: "status", header: "Status" },
    ];

    const actions = (item) => (
        <>
            <Button size="icon" variant="outline">
                <Edit className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="destructive">
                <Trash2 className="h-4 w-4" />
            </Button>
        </>
    );

  return (
    <div>
      <ReusableContent title="Quiz and Assignment">
        <ReusableTable data={assignments} columns={columns} />
      </ReusableContent>
    </div>
  );
};

export default QuizAndAssignment;
