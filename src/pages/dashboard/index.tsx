import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import "./financial-record.css";
import { useFinancialRecords } from "../../contexts/financial-record-context";
export const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  return (
    <div className="dashboard-container">
      <h1>Welcome {user?.firstName}! Here are your Finances</h1>
      <FinancialRecordForm />
      <div>Total Monthly: {records.reduce((a, b) => a + b.amount, 0)}</div>
      <FinancialRecordList />
    </div>
  );
};
