import * as React from "react";
import { render } from "@testing-library/react-native";
import { View, Text } from "react-native";

const DropdownContent = () => {
  return (
    <View>
      <Text>Some amazing test</Text>
    </View>
  );
};

it("reproduction test", () => {
  const { getByText } = render(<DropdownContent />);

  getByText("Some amazing test");
});
