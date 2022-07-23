import renderer from "react-test-renderer";

import ListOfProducts from "../ListOfProducts";

it("U R THE Boss Well done", () => {
    const tree = renderer.create(<ListOfProducts />).toJSON();
    expect(tree).toMatchSnapshot();
});
