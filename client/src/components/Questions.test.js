import React from "react";
import { shallow, mount, render } from "enzyme";
import sinon from "sinon";

import Questions from './Questions.jsx';


// question={question}

describe('<Questions />', () => {
  it('renders successfully', () => {
    const props = {
      answers: [
        {
          _id: "5cef652a3d45e906f96a6729", 
          user: "Courtnay", 
          answer: "Suspendisse potenti.", 
          createdAt: "2019-03-01T11:07:07.000Z"
        }
      ],
      question: "Integer a nibh. In quis justo?",
      question_id: 4,
      votes: 4,
      _id: "5cef652a3d45e906f96a6728"
    }
    const wrapper = shallow(<Questions question={props}/>);
    expect(wrapper.exists()).toBe(true);
  });

  
});

