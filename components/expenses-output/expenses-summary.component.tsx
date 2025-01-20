import React, { FC, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IExpense } from "./expenses-output.component";
import { GlobalStyles } from "@/constants/Colors";

type TExpensesSummaryProps = {
  expenses: IExpense[];
  periodName: string;
};

const ExpensesSummary: FC<TExpensesSummaryProps> = ({
  expenses,
  periodName,
}) => {
  const expensesSum = useMemo(() => {
    return expenses.reduce((sum, expense) => {
      return sum + expense.amount;
    }, 0);
  }, [expenses]);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export { ExpensesSummary };

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
