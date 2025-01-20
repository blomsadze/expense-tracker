import { lazy } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// lazy import screens
const RecentExpenses = lazy(() => import("../screens"));
const AllExpenses = lazy(() => import("../screens"));

const BottomTabs = createBottomTabNavigator();

export const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
    </BottomTabs.Navigator>
  );
};
