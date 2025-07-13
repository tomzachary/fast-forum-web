import { Modal } from "@/components/modal/modal";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

describe("Modal", () => {
  it("renders the modal with title and content", () => {
    const title = "Modal Title";
    const content = "This is a modal dialog.";
    render(
      <Modal title={title} isOpen={true} onClose={() => {}}>
        <p>{content}</p>
      </Modal>,
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it("has a close button", () => {
    const title = "Modal Title";
    const content = "This is a modal dialog.";
    render(
      <Modal title={title} isOpen={true} onClose={() => {}}>
        <p>{content}</p>
      </Modal>,
    );
    expect(screen.getByText("×")).toBeInTheDocument();
  });

  it("closes the modal when close button is clicked", () => {
    const title = "Modal Title";
    const content = "This is a modal dialog.";

    const ModalWrapper = () => {
      const [open, setOpen] = React.useState(true);
      return (
        <Modal title={title} isOpen={open} onClose={() => setOpen(false)}>
          <p>{content}</p>
        </Modal>
      );
    };

    render(<ModalWrapper />);
    expect(screen.getByTestId("modal")).toBeInTheDocument();
    expect(screen.getByTestId("modal")).toHaveClass("modalOpen");
    const closeButton = screen.getByText("×");
    fireEvent.click(closeButton);
    expect(screen.queryByTestId("modal")).toHaveClass("modalClose");
  });
});
