import React from "react";
import {shallow, mount, render} from 'enzyme';
import AlertMsg from './AlertMsg';

describe('Alert message render test', () => {
  it("Alert Component can be rendered even without required props", () => {
    expect(shallow(<AlertMsg />)).toMatchSnapshot();
  });

  it("Button type should match with error", () => {
    const mockType = "error";
    expect(shallow(<AlertMsg type={mockType} />)).toMatchSnapshot();
  });

  it("Button type should match with info", () => {
    const mockType = "info";
    expect(shallow(<AlertMsg type={mockType} />)).toMatchSnapshot();
  });

  it("Button type should match with warning", () => {
    const mockType = "warning";
    expect(shallow(<AlertMsg type={mockType} />)).toMatchSnapshot();
  });

  it("Can set message", () => {
    const mockMessage = "Hello this is a test";
    expect(shallow(<AlertMsg message={mockMessage} />)).toMatchSnapshot();
  });

  it("ID btn exists", () => {
    const wrapper = shallow(<AlertMsg type="success" />);

    wrapper.find('[id="btn"]').simulate("click");
    expect(wrapper.open).not.toBe(true);
  });
});


