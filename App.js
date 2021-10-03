import React from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Switch
        width={140}
        height={60}
        initValue={false}
        onChange={(state) => console.log("state", state)}
      />
      <Switch
        width={200}
        height={80}
        initValue={true}
        onChange={(state) => console.log("state", state)}
      />

      <Switch
        width={200}
        height={80}
        initValue={false}
        onChange={(state) => console.log("state", state)}
      />
    </View>
  );
}

function Switch({ width, height, initValue = false, onChange }) {
  const indicatorWidth = (width - width * 0.02) / 2;
  const [state, setState] = React.useState(!!initValue);
  const animation = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    onChange(state);
    Animated.spring(animation, {
      toValue: state ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [state]);

  const sliderPosition = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, indicatorWidth - width * 0.02],
    extrapolate: "clamp",
  });
  return (
    <TouchableOpacity onPress={() => setState(!state)}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: width,
          height: height,
          borderRadius: height / 4,
          backgroundColor: state ? "#2bb332" : "#c2c2c2",
        }}
      >
        <Animated.View
          style={{
            position: "absolute",
            borderRadius: height / 4,
            transform: [{ translateX: sliderPosition }],
            width: indicatorWidth,
            margin: width * 0.02,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#FFF",
            zIndex: 2,
            elevation: 2,
          }}
        />
        <Animated.Text
          style={{
            fontSize: width * 0.18,
            color: "#FFF",
            fontWeight: "bold",
            width: width - indicatorWidth * 0.2,
            textAlign: state ? "left" : "right",
          }}
        >
          {state ? "ON" : "OFF"}
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
