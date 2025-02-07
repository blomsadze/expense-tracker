import React, { FC } from "react";
import { FlatList } from "react-native";

import { ExpenseItem } from ".";
import { IExpense } from "@/context/expenses.context";

type TExpensesListProps = {
  expenses?: IExpense[];
};

const ExpensesList: FC<TExpensesListProps> = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => <ExpenseItem expense={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export { ExpensesList };
