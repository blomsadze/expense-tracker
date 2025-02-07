import { useContext } from "react";
import { ExpensesOutput } from "@/components";
import { ExpensesContext } from "@/context/expenses.context";

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
}
