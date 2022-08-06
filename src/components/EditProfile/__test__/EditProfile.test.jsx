import renderer from "react-test-renderer";

import EditProfile from "../EditProfile";
it("renders correctly", () => {
    const tree = renderer.create(<EditProfile />).toJSON();
    expect(tree).toMatchSnapshot();
});
