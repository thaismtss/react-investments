import React from 'react';

export default function Investments({
  name,
  totalIncome,
  children: investment,
}) {
  const classNameValue = totalIncome > 0 ? 'text-green-600' : 'text-red-600';

  return (
    <>
      <div className="border p-2 m-2">
        <p className="text-center font-medium">{name}</p>
        <p className="text-center font-medium mb-4">
          Rendimento Total:{' '}
          <span className={classNameValue}>R$ {totalIncome}</span>
        </p>
        {investment}
      </div>
    </>
  );
}
