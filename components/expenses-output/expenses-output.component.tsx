import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { ExpensesSummary, ExpensesList } from ".";
import { GlobalStyles } from "@/constants/Colors";

type TExpensesOutputProps = {
  expenses?: any[];
  expensesPeriod?: string;
};

export interface IExpense {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

const DUMMY_EXPENSES: IExpense[] = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e5",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e8",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e9",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e10",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
];

const ExpensesOutput: FC<TExpensesOutputProps> = ({
  expenses = DUMMY_EXPENSES,
  expensesPeriod = "Last 7 days",
}) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
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
});
