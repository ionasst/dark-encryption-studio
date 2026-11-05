import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { EncrypterWorkspace } from "./encrypter-workspace";

afterEach(() => { cleanup(); vi.useRealTimers(); });

describe("visual simulation", () => {
  it("requires a fictional sample and an output name before running", () => {
    render(<EncrypterWorkspace />);
    const run = screen.getByRole("button", { name: "Run simulation" });
    expect(run).toBeDisabled();
    fireEvent.change(screen.getByLabelText("Input file"), { target: { value: "1" } });
    expect(run).toBeEnabled();
    fireEvent.change(screen.getByLabelText("Output name"), { target: { value: " " } });
    expect(run).toBeDisabled();
  });

  it("completes staged progress and resets to zero", () => {
    vi.useFakeTimers();
    render(<EncrypterWorkspace />);
    fireEvent.change(screen.getByLabelText("Input file"), { target: { value: "2" } });
    fireEvent.click(screen.getByRole("button", { name: "Run simulation" }));
    for (let i = 0; i < 5; i++) act(() => { vi.advanceTimersByTime(700); });
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "100");
    fireEvent.click(screen.getByRole("button", { name: "Reset simulation" }));
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "0");
  });
});