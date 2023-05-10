import React from 'react';
import Header from '../components/Header';
import Investment from '../components/Investment';
import Investments from '../components/Investments';
import { mappedInvestments } from '../data/parsedInvestments';

export default function Main() {
  return (
    <>
      <Header />
      {mappedInvestments.map(({ id, description, totalIncome, reports }) => {
        return (
          <Investments key={id} name={description} totalIncome={totalIncome}>
            {reports.map(report => {
              return <Investment key={report.id}>{report}</Investment>;
            })}
          </Investments>
        );
      })}
    </>
  );
}
