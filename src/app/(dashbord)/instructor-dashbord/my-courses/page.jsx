"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ChevronLeft, ChevronRight, MoreVertical, Edit, Trash } from "lucide-react";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import Swal from "sweetalert2";

const MyCourses = () => {
    const { user } = useAuth();
    const [courses, setCourses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const coursesPerPage = 10;

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:5000/student-course/${user?.email}`)
                .then(result => {
                    setCourses(result.data);
                    console.log(result.data);
                })
        }
    }, [user])

    // Pagination
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

    const totalPages = Math.ceil(courses.length / coursesPerPage);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        const filteredCourses = courses.filter(course =>
            course.courseTitle.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setCourses(filteredCourses);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleEdit = (id) => {
        // Implement edit functionality
        console.log("Edit course with id:", id);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/student-course/${id}`)
                    .then(response => {
                        if (response.data.success) {
                            setCourses(courses.filter(course => course._id !== id));
                            Swal.fire("Deleted!", "Your course has been deleted.", "success");
                        }
                    })
                    .catch(error => console.error("Error deleting course:", error));
            }
        });
    };




    return (
        <div className="p-6 bg-gray-50 min-h-screen rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-xl font-semibold">Course List</h2>
                    <p className="text-sm text-gray-500 mt-1">10 Course Per Page</p>
                </div>
                <Button>+ Add New Course</Button>
            </div>

            <Input
                placeholder="Search"
                className="mb-4 max-w-sm"
                value={searchQuery}
                onChange={handleSearch}
            />

            <Table className="bg-white">
                <TableHeader>
                    <TableRow>
                        <TableHead>No</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Course Type</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Published</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentCourses.map((course, index) => (
                        <TableRow key={course._id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell className="font-medium">{course.courseTitle}</TableCell>
                            <TableCell>{course.courseTag}</TableCell>
                            <TableCell>{course.duration} Min</TableCell>
                            <TableCell>${course.price}</TableCell>
                            <TableCell>
                                <Badge className={'bg-green-500 px-2.5 py-1'}>
                                    {course.courseStatus}
                                </Badge>
                            </TableCell>
                            <TableCell>{new Date(course.date).toLocaleDateString()}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button className={'cursor-pointer'} variant="ghost" size="icon">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem className={'cursor-pointer'} onClick={() => handleEdit(course.id)}>
                                                <Edit className="mr-2 h-4 w-4" /> Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                className="text-red-600 cursor-pointer"
                                                onClick={() => handleDelete(course._id)}
                                            >
                                                <Trash className="mr-2 h-4 w-4 cursor-pointer" /> Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">
                    Showing {indexOfFirstCourse + 1} to {Math.min(indexOfLastCourse, courses.length)} of {courses.length} entries
                </span>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft className="h-4 w-4 mr-2" /> Previous
                    </Button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </Button>
                    ))}
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MyCourses;