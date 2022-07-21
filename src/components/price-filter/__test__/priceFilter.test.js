import renderer from "react-test-renderer";

import PriceFilter from "../PriceFilter";

it("renders correctly", () => {
    const tree = renderer.create(<PriceFilter />).toJSON();
    expect(tree).toMatchSnapshot();
});
