<script setup lang="ts">
import CallToAction from "./CallToAction.vue";
import HeroSection from "./HeroSection.vue";
import StepList from "./StepList.vue";
import { howItWorks, roadmap } from "~/data/copy";
</script>

<template>
  <div>
    <HeroSection />
    <StepList :section="howItWorks" />
    <StepList :section="roadmap" />
    <div class="closing">
      <CallToAction />
    </div>
  </div>
</template>

<style scoped>
.closing {
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: var(--section-gap) var(--gutter);
  box-sizing: border-box;
}
</style>
