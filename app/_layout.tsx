import React from "react";
import { Stack } from "expo-router";
import { GlobalStyles } from "@/constants/Colors";
const RootLayout = () => {
  return (
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
  );
};

export default RootLayout;
