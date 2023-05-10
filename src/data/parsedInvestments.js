import { investmentsData } from './investments';
import { roundNumber } from '../helpers/utils';

const investments = investmentsData.investments;
const reports = investmentsData.reports;

const calculateMonthlyIncome = (currentValue, previousValue) => {
  const valueDifference = currentValue - previousValue;
  const percentDifference =
    previousValue !== 0 ? (valueDifference / previousValue) * 100 : 0;

  return {
    value: roundNumber(valueDifference),
    percent: roundNumber(percentDifference),
  };
};

const calculateTotalIncome = sortedReports => {
  const initialValue = sortedReports[0].value;
  const finalValue = sortedReports[sortedReports.length - 1].value;

  return roundNumber(finalValue - initialValue);
};

const mapInvestment = investment => {
  const filteredReports = reports.filter(
    report => report.investmentId === investment.id
  );
  const sortedReports = filteredReports.sort((a, b) => a.month - b.month);

  const mappedReports = sortedReports.map((currentReport, index, reports) => {
    const previousReport = reports[index - 1] || { value: 0 };
    const monthlyIncome = calculateMonthlyIncome(
      currentReport.value,
      previousReport.value
    );

    return {
      ...currentReport,
      result: monthlyIncome,
    };
  });

  const totalIncome = calculateTotalIncome(sortedReports);

  return {
    ...investment,
    reports: mappedReports,
    totalIncome: totalIncome,
  };
};

export const mappedInvestments = investments.map(mapInvestment);
