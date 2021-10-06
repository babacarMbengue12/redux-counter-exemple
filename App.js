import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import counters from "./redux/counterReducer";
import AddCounterButton from "./components/AddCounterButton";
import Counters from "./components/Counters";
import TotalValue from "./components/TotalValue";
const store = createStore(
  combineReducers({
    counters,
  })
);
export default function App() {
  return (
    <Provider store={store}>
      <ScrollView contentContainerStyle={styles.container}>
        <AddCounterButton />
        <TotalValue />
        <Counters />
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
