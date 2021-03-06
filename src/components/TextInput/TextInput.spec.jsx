import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from ".";

describe("<TextInput />", () => {
  it("should call handleChange function on each key pressed", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="Value" />);
    const input = screen.getByPlaceholderText(/type your search/i);
    const value = "Value";

    userEvent.type(input, value);

    expect(input.value).toBe("Value");

    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={"Test"} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    expect(input).toBeInTheDocument();

    expect(input.value).toBe("Test");
  });

  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(
      <TextInput handleChange={fn} searchValue={"Test"} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
