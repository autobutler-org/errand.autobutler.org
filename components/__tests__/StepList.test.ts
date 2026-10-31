import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import StepList from "../StepList.vue";
import { howItWorks, roadmap } from "~/data/copy";

describe("StepList", () => {
  it.each([howItWorks, roadmap])("numbers the $id steps in order", (section) => {
    const items = mount(StepList, { props: { section } }).findAll("ol li");
    expect(items).toHaveLength(section.steps.length);
    items.forEach((item, index) => {
      expect(item.text()).toContain(String(index + 1).padStart(2, "0"));
      expect(item.text()).toContain(section.steps[index]?.title);
    });
  });

  it.each([howItWorks, roadmap])("exposes the #$id anchor the hero links to", (section) => {
    expect(mount(StepList, { props: { section } }).get("section").attributes("id")).toBe(
      section.id
    );
  });

  /* Hosting for other teams is not live; the roadmap must say so. */
  it("says Errand is not open to other teams yet", () => {
    expect(mount(StepList, { props: { section: roadmap } }).text()).toMatch(/not open/i);
  });
});
