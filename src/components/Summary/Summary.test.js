import React from "react";
import renderer from "react-test-renderer";
import { Summary } from "./Summary";

const props = {
  users: [{
    id: "8",
    first_name: "Prince",
    last_name: "Holton",
    dob: "01.01.2008",
    location: "Kiev"
  }]
};

describe('Summary Component', () => {
  let wrapper;

   it("renders without crashing", () => {
    const tree = renderer.create(<Summary {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
