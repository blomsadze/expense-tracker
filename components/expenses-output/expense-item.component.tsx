import React, { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { IExpense } from "./expenses-output.component";
import { GlobalStyles } from "@/constants/Colors";
import { useRouter } from "expo-router";

type TExpenseItemProps = {
  expense: IExpense;
};

const ExpenseItem: FC<TExpenseItemProps> = ({ expense }) => {
  const router = useRouter();

  const expensePressHandler = () => {
    router.push(`/manage-expense?expenseId=${expense.id}`);
  };

  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed]}
      onPress={expensePressHandler}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={styles.textBase}>{expense.description}</Text>
          <Text style={styles.textBase}>
            {expense.date.toLocaleDateString()}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{expense.amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export { ExpenseItem };

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    flex: 1,
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
