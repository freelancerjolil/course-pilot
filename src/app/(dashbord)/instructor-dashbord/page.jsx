"use client";
import DashboardCard from "@/app/components/dashboard/DashboardCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import CourseStatisticsChart from "./components/CourseStatisticsChart";
import SellingReportChart from "./components/SellingReportChart";

export default function InstructorDashboard() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  return (
    <div>
      <h1 className="text-2xl font-bold">Overview</h1>
      <div className="max-w-full border-2 rounded-2xl p-10 mt-5 space-y-15">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <DashboardCard title="Enrolled Students" value="320" />
          <DashboardCard title="Total Courses" value="10" />
          <DashboardCard title="Earnings" value="$25K" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow rounded-lg p-6">
            <CourseStatisticsChart />
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <SellingReportChart />
          </div>
        </div>
        <div>
          <div className="space-y-10 md:flex justify-between">
            <h3 className="font-bold text-xl">Best Selling Courses</h3>
            <div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="7" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Last 7 days</SelectItem>
                  <SelectItem value="dark">Last 14 days</SelectItem>
                  <SelectItem value="system">Last Month</SelectItem>
                  <SelectItem value="system">Last 6 Month</SelectItem>
                  <SelectItem value="system">Last 12 Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <hr className="border-t-2 border-gray-300 my-4" />
        </div>
        <div className="overflow-y-auto max-h-[200px]">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Course Title
                </th>
                <th scope="col" className="px-6 py-4">
                  Price
                </th>
                <th scope="col" className="px-6 py-4">
                  Enroll
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">100</td>
                <td className="whitespace-nowrap px-6 py-4">30</td>
              </tr>
              {/* Row 2 */}
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">John Doe</div>
                      <div className="text-sm opacity-50">Canada</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">150</td>
                <td className="whitespace-nowrap px-6 py-4">45</td>
              </tr>
              {/* Row 3 */}
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Jane Smith</div>
                      <div className="text-sm opacity-50">Australia</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">120</td>
                <td className="whitespace-nowrap px-6 py-4">35</td>
              </tr>
              {/* Row 4 */}
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Alice Johnson</div>
                      <div className="text-sm opacity-50">Germany</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">180</td>
                <td className="whitespace-nowrap px-6 py-4">50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
