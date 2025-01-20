import React, { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { Button, IconButton } from "@/components/ui";
import { GlobalStyles } from "@/constants/Colors";

const ManageExpense = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { expenseId } = useLocalSearchParams();
  const isEditing = !!expenseId;

  const deleteExpenseHandler = () => {
    console.log("delete expense");
  };

  const cancelExpenseHandler = () => {
    router.back();
  };

  const saveExpenseHandler = () => {
    console.log("save expense");
  };

  // set title
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing]);

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button
          style={styles.button}
          mode="flat"
          onPress={cancelExpenseHandler}
        >
          Cancel
        </Button>
        <Button style={styles.button} onPress={saveExpenseHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={24}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
