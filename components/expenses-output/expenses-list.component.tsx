import React, { FC } from "react";
import { FlatList } from "react-native";

import { ExpenseItem, IExpense } from ".";

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
