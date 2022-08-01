import renderer from "react-test-renderer";

import CategoryPriceFilter from "../CategoryPriceFilter";

it("renders correctly", () => {
    const tree = renderer.create(<CategoryPriceFilter />).toJSON();
    expect(tree).toMatchSnapshot();
});
