import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import SiteHeader from "../SiteHeader.vue";
import { masthead } from "~/data/copy";

describe("SiteHeader", () => {
  it("shows the Errand wordmark linked to the homepage", () => {
    const wordmark = mount(SiteHeader).get(".wordmark");
    expect(wordmark.text()).toBe(masthead.wordmark);
    expect(wordmark.attributes("href")).toBe("/");
  });

  it("renders every masthead link", () => {
    const hrefs = mount(SiteHeader)
      .findAll("a")
      .map((anchor) => anchor.attributes("href"));
    for (const link of masthead.links) {
      expect(hrefs).toContain(link.href);
    }
  });

  it("keeps the call to action outside the collapsible nav", () => {
    const wrapper = mount(SiteHeader);
    const navHrefs = wrapper
      .get("nav")
      .findAll("a")
      .map((anchor) => anchor.attributes("href"));
    expect(navHrefs).not.toContain(masthead.cta.href);
    expect(wrapper.get("a.cta").text()).toBe(masthead.cta.label);
  });

  it("toggles the mobile menu", async () => {
    const wrapper = mount(SiteHeader);
    const button = wrapper.get("button.menu-toggle");
    expect(button.attributes("aria-expanded")).toBe("false");
    await button.trigger("click");
    expect(button.attributes("aria-expanded")).toBe("true");
    expect(wrapper.get("nav").classes()).toContain("open");
    await button.trigger("click");
    expect(button.attributes("aria-expanded")).toBe("false");
  });

  it("closes the menu when a nav link is clicked", async () => {
    const wrapper = mount(SiteHeader);
    await wrapper.get("button.menu-toggle").trigger("click");
    const link = wrapper.get("nav a");
    link.element.addEventListener("click", (event) => event.preventDefault());
    await link.trigger("click");
    expect(wrapper.get("nav").classes()).not.toContain("open");
  });
});
