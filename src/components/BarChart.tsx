'use client';
import React from 'react';
import { Chart, registerables } from 'chart.js/auto';
Chart.register(...registerables);
import { Bar } from 'react-chartjs-2';

const options = {
  maintainAspectRatio: false,
  responsive: true,

  legend: {
    labels: {
      fontColor: 'rgba(0,0,0,.4)',
    },
    align: 'end',
    position: 'bottom',
  },
};

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
        backgroundColor: '#4c51bf',
        borderColor: '#4c51bf',
        data: [30, 78, 56, 34, 100, 45, 13],
        fill: false,
        barThickness: 8,
      },
      {
        label: (new Date().getFullYear() - 1).toString(),
        fill: false,
        backgroundColor: '#ed64a6',
        borderColor: '#ed64a6',
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
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
