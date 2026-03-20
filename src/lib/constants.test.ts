import { describe, it, expect } from "bun:test";
import { WHATSAPP_NUMBER, whatsappUrl } from "./constants";

describe("WHATSAPP_NUMBER", () => {
  it("is the correct number", () => {
    expect(WHATSAPP_NUMBER).toBe("919667545342");
  });
});

describe("whatsappUrl", () => {
  it("returns base URL when no message given", () => {
    expect(whatsappUrl()).toBe("https://wa.me/919667545342");
  });

  it("encodes a simple message", () => {
    expect(whatsappUrl("Hello world")).toBe(
      "https://wa.me/919667545342?text=Hello%20world"
    );
  });

  it("encodes special characters", () => {
    const result = whatsappUrl("Hi, I'm interested!");
    expect(result).toContain("?text=");
    expect(result).not.toContain(" ");
    expect(result).not.toContain(",");
  });
});
