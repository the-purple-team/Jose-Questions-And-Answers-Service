import React from "react";
import { shallow, mount, render } from "enzyme";
import sinon from "sinon";

import Votes from "./Votes.jsx";

describe("<Votes />", () => {
  it("should receive the correct props", () => {
    const changevote = () => {};
    const wrapper = mount(
      <Votes
        changevotes={changevote}
        productId={"5cef652a3d45e906f96a66f4"}
        questionId={2}
        vote={12}
      />
    );
    expect(wrapper.prop("productId")).toEqual("5cef652a3d45e906f96a66f4");
    expect(wrapper.prop("changevotes")).toEqual(changevote);
    expect(wrapper.prop("vote")).toEqual(12);
    expect(wrapper.prop("questionId")).toEqual(2);
  });
});
