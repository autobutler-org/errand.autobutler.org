<script setup lang="ts">
/**
 * A numbered row of steps under a section intro. Used for both how a job runs
 * and the order Errand opens up in; the copy comes from `data/copy.ts`.
 */
import SectionIntro from "./SectionIntro.vue";
import type { StepSection } from "~/data/copy";

defineProps<{ readonly section: StepSection }>();
</script>

<template>
  <section :id="section.id" class="steps-section">
    <SectionIntro :eyebrow="section.eyebrow" :heading="section.heading" :lede="section.lede" />
    <ol class="steps">
      <li v-for="(step, index) in section.steps" :key="step.title" class="reveal">
        <span class="number" aria-hidden="true">{{ String(index + 1).padStart(2, "0") }}</span>
        <h3>{{ step.title }}</h3>
        <p>{{ step.body }}</p>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.steps-section {
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: var(--section-gap) var(--gutter) 0;
  box-sizing: border-box;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
  gap: 2.5rem var(--gutter);
  margin: 3.5rem 0 0;
  padding: 0;
  list-style: none;
}

li {
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-text-strong);
}

.number {
  display: block;
  margin-bottom: 2.5rem;
  font-family: var(--font-serif);
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1;
  letter-spacing: var(--tracking-tight);
  font-variant-numeric: lining-nums;
  color: var(--color-text-muted);
}

h3 {
  margin: 0 0 0.6rem;
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: var(--tracking-snug);
  color: var(--color-text-strong);
}

p {
  margin: 0;
  max-width: 34ch;
  color: var(--color-text-muted);
  text-wrap: pretty;
}
</style>
