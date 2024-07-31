import { render, fireEvent } from "@testing-library/react";
import { BaseButton } from "./BaseButton";

describe("component: BaseButton", () => {
  test("should render children", () => {
    const { getByText } = render(
      <BaseButton>
        <span>Button Text</span>
      </BaseButton>
    );
    const buttonText = getByText("Button Text");
    expect(buttonText).toBeInTheDocument();
  });

  test("should apply custom styles", () => {
    const { container } = render(
      <BaseButton customStyles="custom-class">
        <span>Button Text</span>
      </BaseButton>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  test("should handle disabled state", () => {
    const { getByRole } = render(
      <BaseButton disabled>
        <span>Button Text</span>
      </BaseButton>
    );
    const button = getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      "disabled:bg-plum",
      "disabled:text-[#fff]",
      "disabled:cursor-auto"
    );
  });

  test("should apply hover styles", () => {
    const { getByRole } = render(
      <BaseButton>
        <span>Button Text</span>
      </BaseButton>
    );
    const button = getByRole("button");
    expect(button).toHaveClass("hover:bg-sohoLights/75");
  });

  test("should handle click event", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <BaseButton onClick={handleClick}>
        <span>Button Text</span>
      </BaseButton>
    );
    const button = getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("should apply default styles", () => {
    const { container } = render(
      <BaseButton>
        <span>Button Text</span>
      </BaseButton>
    );
    expect(container.firstChild).toHaveClass(
      "bg-sohoLights",
      "text-[#000]",
      "rounded-lg",
      "cursor-pointer",
      "disabled:bg-plum",
      "disabled:text-[#fff]",
      "hover:bg-sohoLights/75",
      "disabled:cursor-auto"
    );
  });
});
