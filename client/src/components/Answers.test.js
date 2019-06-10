import React from "react";
import { shallow, mount, render } from "enzyme";
import sinon from "sinon";

import Answers from "./Answers.jsx";

describe("<Answers /> Test Suite", () => {
  it("should accept array of props", () => {
    const wrapper = mount(<Answers answers={[]} />);
    expect(wrapper.prop("answers")).toEqual([]);
  });
});
