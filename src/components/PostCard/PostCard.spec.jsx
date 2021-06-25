import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardMock } from "./mock";

const props = postCardMock;

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole("img", { name: /title/i })).toHaveAttribute(
      "src",
      props.cover
    );

    expect(screen.getByRole("heading", { name: "Title" })).toBeInTheDocument();

    expect(screen.getByText("Body")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
