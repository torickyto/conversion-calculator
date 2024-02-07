import React from 'react';
import Link from 'next/link';
import EmptyConversion from './EmptyConversion';
import WeightConversion from './WeightConversion';
import DistanceConversion from './DistanceConversion';
import TemperatureConversion from './TemperatureConversion';

const MainUI = ({ currentPage }) => {
  let conversionType;

  switch (currentPage) {
    case 'WeightConversion':
      conversionType = <WeightConversion />;
      break;
    case 'DistanceConversion':
      conversionType = <DistanceConversion />;
      break;
    case 'TemperatureConversion':
      conversionType = <TemperatureConversion />;
      break;
    default:
      conversionType = <EmptyConversion />;
  }

  return (
    <div className="relative flex flex-col items-center justify-between h-screen p-14">
      <h1 className="text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-neutral-700 to-neutral-900 text-transparent bg-clip-text border-b-4 border-gray-600 rounded-md">
        converto
      </h1>

      <div className="relative p-14 mb-22 lg:w-full lg:max-w-7xl z-0 border border-neutral-300 bg-neutral-800 rounded-xl mt-[-100px]">
        {conversionType}
      </div>


      <div className="mb-28 grid text-center lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {/* Pounds to Kilograms */}
        <Link href="/weight">
          <div className="group rounded-lg border border-transparent p-4 lg:p-6 transition-colors hover:border-gray-300 hover:bg-neutral-800 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col items-center justify-center">
            <h2 className={`mb-3 text-xl font-extrabold group-hover:text-neutral-200`}>
              WEIGHT{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              </span>
            </h2>
            <p className={`m-0 text-sm opacity-50 group-hover:text-neutral-200`}>
              Convert pounds (lb.) to kilograms (kg) and vice versa.
            </p>
          </div>
        </Link>

        {/* Miles to Kilometres */}
        <Link href="/distance">
          <div className="group rounded-lg border border-transparent p-4 lg:p-6 transition-colors hover:border-gray-300 hover:bg-neutral-800 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col items-center justify-center">
            <h2 className={`mb-3 text-xl font-extrabold group-hover:text-neutral-200`}>
              DISTANCE{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              </span>
            </h2>
            <p className={`m-0 text-sm opacity-50 group-hover:text-neutral-200`}>
              Convert miles to kilometres (km) and vice versa.
            </p>
          </div>
        </Link>

        {/* Celsius to Fahrenheit */}
        <Link href="/temperature">
          <div className="group rounded-lg border border-transparent p-4 lg:p-6 transition-colors hover:border-gray-300 hover:bg-neutral-800 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col items-center justify-center">
            <h2 className={`mb-3 text-xl font-extrabold group-hover:text-neutral-200`}>
              TEMPERATURE{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              </span>
            </h2>
            <p className={`m-0 text-sm opacity-50 group-hover:text-neutral-200`}>
              Convert Celsius (°C) to Fahrenheit (°F) and vice versa.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainUI;