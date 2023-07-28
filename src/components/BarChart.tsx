'use client';
import React from 'react';
import { Chart, registerables, ChartType, Color } from 'chart.js/auto';
Chart.register(...registerables);
import type { ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

// const data = [
//   {
//     month: 'January',
//     value: 30,
//   },
//   {
//     month: 'February',
//     value: 78,
//   },
//   {
//     month: 'JanMarchuary',
//     value: 56,
//   },
//   {
//     month: 'April',
//     value: 34,
//   },
//   {
//     month: 'May',
//     value: 100,
//   },
//   {
//     month: 'June',
//     value: 45,
//   },
//   {
//     month: 'July',
//     value: 13,
//   },
// ];

export default function BarChart() {
  const labels: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  let data = {
    labels,
    datasets: [
      {
        label: new Date().getFullYear().toString(),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        data: [30, 78, 56, 34, 100, 45, 13],
        fill: false,
        barThickness: 8,
      },
      {
        label: (new Date().getFullYear() - 1).toString(),
        fill: false,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
        data: [27, 68, 86, 74, 10, 4, 87],
        barThickness: 8,
      },
    ],
  };

  return (
    <>
      <div className="w-full xl:w-4/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                  Performance
                </h6>
                <h2 className="text-blueGray-700 text-xl font-semibold">
                  Total orders
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            {/* Chart */}
            <div className="relative" style={{ height: '350px' }}>
              {/* <canvas id="barChart"></canvas> */}
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
