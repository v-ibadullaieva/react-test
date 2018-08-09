import React from "react";
import renderer from "react-test-renderer";
import { TableComponent } from "./Table";

const props = {
  users: [{
    id: "8",
    first_name: "Prince",
    last_name: "Holton",
    dob: "01.01.2008",
    location: "Kiev"
  }],
  fetchUsers: (x) => x
};

describe('Table Component', () => {
  it("renders without crashing", () => {
    const tree = renderer.create(<TableComponent {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
