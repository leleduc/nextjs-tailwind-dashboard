'use client';
import React from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { Line } from 'react-chartjs-2';

const options = {
  plugins: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

export default function LineChart() {
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
        backgroundColor: '#4c51bf',
        borderColor: '#4c51bf',
        data: [65, 78, 66, 44, 56, 67, 75],
        fill: false,
      },
      {
        label: (new Date().getFullYear() - 1).toString(),
        fill: false,
        backgroundColor: '#ed64a6',
        borderColor: '#ed64a6',
        data: [40, 68, 86, 74, 56, 60, 87],
      },
    ],
  };

  return (
    <>
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-800">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                  Overview
                </h6>
                <h2 className="text-white text-xl font-semibold">
                  Sales value
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            {/* Chart */}
            <div className="relative" style={{ height: '350px' }}>
              <Line data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
