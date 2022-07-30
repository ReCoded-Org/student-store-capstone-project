import renderer from "react-test-renderer";

import Button from "../Button";

it("renders correctly", () => {
    const tree = renderer
        .create(<Button buttonStyle='orangeSignIn' />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
