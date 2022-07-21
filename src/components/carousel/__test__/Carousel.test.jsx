import renderer from "react-test-renderer";
import Carousel from "../Carousel";

it("renders correctly", () => {
    const tree = renderer.create(<Carousel />).toJSON();
    expect(tree).toMatchSnapshot();
});
