//need to add "use client" to handle client side interactions
"use client"

import React, { useState } from 'react';
import { createNewConverter, unitSwap } from './ConversionMath';

const DistanceConversion = () => {

  // initialize the states (left value) and a function to update the states (right value)
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');

  // initialize the states for temperature conversion
  const [fromUnit, setFromUnit] = useState('lb.');
  const [toUnit, setToUnit] = useState('kg');

  // function for swapping units being converted
  const handleSwapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const handleConvert = () => {
    // create a conversion function based on the units
    const conversionFunction = createNewConverter(fromUnit, toUnit);

    // split the input string into an array of floats
    const inputValuesArray = inputValue.split(',').map(num => parseFloat(num.trim()));

    // checks if values are a number and if there is a working conversion then...
    if (inputValuesArray.every(num => !isNaN(num)) && conversionFunction) {

      // apply the conversion to each number
      const resultsArray = inputValuesArray.map(inputValueNumber => conversionFunction(inputValueNumber));
      setConvertedValue(resultsArray.map(result => result.toFixed(2)).join(', '));

    } else {
      console.error('Oops! The conversion went wrong! It was probably an input error.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-200 mb-11 text-center">WEIGHT</h2>

      <div className="mb-4 flex items-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow p-1 mr-2 text-neutral-900 bg-neutral-300 rounded-md"
          placeholder={`${fromUnit}`}
        />
        <div className="flex flex-col">
          <button onClick={handleConvert} className="px-3 py-1 text-neutral-300 bg-neutral-700 rounded-md mb-2">
            convert
          </button>
          <button onClick={handleSwapUnits} className="px-3 py-1 text-neutral-300 bg-neutral-700 rounded-md">
            ↔
          </button>
        </div>
        <input
          type="text"
          value={convertedValue}
          className="flex-grow p-1 ml-2 text-neutral-900 bg-neutral-300 rounded-md"
          placeholder={`${toUnit}`}
          readOnly
        />
      </div>

      <p className="text-neutral-200 text-center">
        {fromUnit} to {toUnit}:
      </p>
    </div>
  );
};

export default DistanceConversion;