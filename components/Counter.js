import React from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {
  onDecrement,
  onDeleteCounter,
  onIncrement,
} from "../redux/counterReducer";

const Counter = ({ onIncrement, onDecrement, onDeleteCounter, counter }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          width: "60%",
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => onDecrement(counter.id)}>
            <Text style={{ fontSize: 40 }}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 40 }}>{counter.value}</Text>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => onIncrement(counter.id)}>
            <Text style={{ fontSize: 40 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button
        color="red"
        title="Supprimer"
        onPress={() => onDeleteCounter(counter.id)}
      />
    </View>
  );
};

export default connect(null, { onIncrement, onDecrement, onDeleteCounter })(
  Counter
);
