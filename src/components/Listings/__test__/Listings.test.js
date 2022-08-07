import renderer from "react-test-renderer";

import Listings from "../Listings";

it("renders correctly", () => {
    const tree = renderer.create(<Listings />).toJSON();
    expect(tree).toMatchSnapshot();
});
