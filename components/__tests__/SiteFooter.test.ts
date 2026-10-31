import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import SiteFooter from "../SiteFooter.vue";
import { footer } from "~/data/copy";

describe("SiteFooter", () => {
  it("shows the footer note", () => {
    expect(mount(SiteFooter).text()).toContain(footer.note);
  });

  it("renders every footer link", () => {
    const hrefs = mount(SiteFooter)
      .findAll("a")
      .map((anchor) => anchor.attributes("href"));
    for (const link of footer.links) {
      expect(hrefs).toContain(link.href);
    }
  });
});
