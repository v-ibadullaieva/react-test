import React from "react";
import renderer from "react-test-renderer";
import InputField from "./InputField";

const props = {
  input: { value: "hello" },
  meta: { touched: true },
  type: "number",
  name: "name",
  placeholder: "hello"
};

it("renders without crashing", () => {
  const tree = renderer.create(<InputField {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
