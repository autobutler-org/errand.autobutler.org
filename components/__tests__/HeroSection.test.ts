import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import HeroSection from "../HeroSection.vue";
import { hero } from "~/data/copy";

describe("HeroSection", () => {
  it("renders the headline and lede", () => {
    const wrapper = mount(HeroSection);
    expect(wrapper.get("h1").text()).toBe(hero.headline);
    expect(wrapper.get(".subhead").text()).toBe(hero.subhead);
    expect(wrapper.text()).toContain(hero.lede);
  });

  it("links to the in-page sections, primary first", () => {
    const hrefs = mount(HeroSection)
      .findAll("a")
      .map((anchor) => anchor.attributes("href"));
    expect(hrefs).toEqual(["#how", "#roadmap"]);
  });

  it("lists every fact as a labelled term and value", () => {
    const wrapper = mount(HeroSection);
    const list = wrapper.get("dl");
    expect(list.attributes("aria-label")).toBe(hero.factsLabel);
    const terms = list.findAll("dt").map((term) => term.text());
    const values = list.findAll("dd").map((value) => value.text());
    expect(terms).toEqual(hero.facts.map((fact) => fact.label));
    expect(values).toEqual(hero.facts.map((fact) => fact.value));
  });

  /* Errand is not sold yet; the fact sheet must not read like a price list. */
  it("makes no price or sign-up claim", () => {
    const text = mount(HeroSection).text();
    expect(text).not.toMatch(/\$|price|free trial|sign up/i);
  });
});
