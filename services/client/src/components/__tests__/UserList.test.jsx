import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import UserList from "./../UserList";

const users = [
  {
    active: true,
    email: "yorewole@gmail.com",
    id: 1,
    username: "eltneg"
  },
  {
    active: true,
    email: "michael@mherman.org",
    id: 2,
    username: "michaelherman"
  }
];

test("UserList renders properly", () => {
  const wrapper = shallow(<UserList users={users} />);
  const element = wrapper.find("h4");
  expect(element.length).toBe(2);
  expect(element.get(0).props.children).toBe("eltneg");
});

test("UserList renders a snapshot properly", () => {
  const tree = renderer.create(<UserList users={users} />).toJSON();
  expect(tree).toMatchSnapshot();
});
