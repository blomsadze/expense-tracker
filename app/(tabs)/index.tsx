import { useContext, useMemo } from "react";
import { ExpensesOutput } from "@/components";
import { ExpensesContext } from "@/context/expenses.context";
import { getDateMinusDays } from "@/utils/getDateMinusDays.util";

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = useMemo(() => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expensesCtx.expenses.filter(
      (expense) => expense.date > date7DaysAgo && expense.date <= today
    );
  }, [expensesCtx.expenses]);

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses for the last 7 days."
    />
  );
}
