import React from "react";
import { Stack } from "expo-router";
import { GlobalStyles } from "@/constants/Colors";
import ExpensesContextProvider from "@/context/expenses.context";
import { StatusBar } from "react-native";

const RootLayout = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ExpensesContextProvider>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="manage-expense"
            options={{ presentation: "modal", title: "Manage Expense" }}
          />
        </Stack>
      </ExpensesContextProvider>
    </>
  );
};

export default RootLayout;
