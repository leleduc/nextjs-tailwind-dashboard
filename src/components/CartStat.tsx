import React from 'react';

interface CardStatProps {
  name: string;
  value: string;
  percentChange: number;
  color: string;
  since: string;
}

const CardStat = ({
  name,
  value,
  percentChange,
  color,
  since,
}: CardStatProps) => {
  return (
    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {name}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {value}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ${color}`}
              >
                <i className="far fa-chart-bar"></i>
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            {percentChange > 0 ? (
              <span className="text-emerald-500 mr-2">
                <i className="fas fa-arrow-up"></i> {String(percentChange)}%
              </span>
            ) : (
              <span className="text-red-500 mr-2">
                <i className="fas fa-arrow-up"></i> {String(percentChange)}%
              </span>
            )}

            <span className="whitespace-nowrap">{`Since ${since}`}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardStat;
