import React from "react";
import Dashboard from "../../components/Dashboard";

import { shallow } from "enzyme";

test("should render Dashboard correctly", () => {
  const wrapper = shallow(<Dashboard />);
  expect(wrapper).toMatchSnapshot();
});
