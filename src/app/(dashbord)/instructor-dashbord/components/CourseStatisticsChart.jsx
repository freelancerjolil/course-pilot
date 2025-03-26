// src/app/teacher-dashbord/components/CourseStatisticsChart.jsx
"use client";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const CourseStatisticsChart = () => {
    const data = {
        labels: ['Course A', 'Course B', 'Course C'],
        datasets: [
            {
                label: 'Enrollments',
                data: [50, 75, 60],
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
            },
            {
                label: 'Average Rating',
                data: [4.2, 4.5, 3.9],
                backgroundColor: 'rgba(255, 206, 86, 0.8)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Course Statistics',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default CourseStatisticsChart;