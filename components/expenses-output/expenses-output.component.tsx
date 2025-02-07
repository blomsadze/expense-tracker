import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ExpensesSummary, ExpensesList } from ".";
import { GlobalStyles } from "@/constants/Colors";
import { IExpense } from "@/context/expenses.context";

type TExpensesOutputProps = {
  expenses?: IExpense[];
  expensesPeriod?: string;
  fallbackText: string;
};

const ExpensesOutput: FC<TExpensesOutputProps> = ({
  expenses = [],
  expensesPeriod = "Last 7 days",
  fallbackText,
}) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
};

export { ExpensesOutput };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
