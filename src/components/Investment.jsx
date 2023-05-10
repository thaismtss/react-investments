import React from 'react';
import { getMonth, roundNumber } from '../helpers/utils';

export default function Investment({ children }) {
  const { month, year, value, result } = children;

  const monthValue = getMonth(month);

  const classNameValue =
    result.percent === 0
      ? ''
      : result.percent > 0
      ? 'text-green-600'
      : 'text-red-600';
  return (
    <>
      <div className="p-1 flex justify-between">
        <div className="space-x-4">
          <span className="inline-block text-end w-20">
            {monthValue} / {year}
          </span>
          <span className={classNameValue}> R${roundNumber(value)}</span>
        </div>
        <div>
          <span className={classNameValue}>{result.percent}%</span>
        </div>
      </div>
    </>
  );
}
