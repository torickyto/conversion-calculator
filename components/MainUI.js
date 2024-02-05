import React from 'react';
import EmptyConversion from './EmptyConversion';

const MainUI = () => {
  return (
    <div className="relative flex flex-col items-center justify-between h-screen p-14">
      <h1 className="text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-600 to-gray-800 text-transparent bg-clip-text">
        Converto
      </h1>

      <div className="relative p-14 mb-22 lg:w-full lg:max-w-7xl z-0 border border-gray-300 bg-neutral-800 rounded-xl mt-[-100px]">
      <EmptyConversion />
      </div>


      <div className="mb-28 grid text-center lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {/* Pounds to Kilograms */}
        <a
          href=""
          className="group rounded-lg border border-transparent p-4 lg:p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Pounds to Kilograms{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Convert pounds (lb.) to kilograms (kg) and vice versa.
          </p>
        </a>

        {/* Miles to Kilometres */}
        <a
          href=""
          className="group rounded-lg border border-transparent p-4 lg:p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Miles to Kilometres{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Convert miles to kilometres (km) and vice versa.
          </p>
        </a>

        {/* Celsius to Fahrenheit */}
        <a
          href=""
          className="group rounded-lg border border-transparent p-4 lg:p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Celsius to Fahrenheit{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Convert Celsius (°C) to Fahrenheit (°F) and vice versa.
          </p>
        </a>
      </div>
    </div>
  );
};

export default MainUI;