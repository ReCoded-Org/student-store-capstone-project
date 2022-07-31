import renderer from "react-test-renderer";

import Donation from "../Donation";
it("renders correctly", () => {
    const tree = renderer.create(<Donation />).toJSON();
    expect(tree).toMatchSnapshot();
});
