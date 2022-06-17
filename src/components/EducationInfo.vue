<script setup>
import { storeLocal } from "../utils/dataHandler";
import { ref, watch, computed, defineProps, inject } from "vue";
import InfoBlock from "./InfoBlock.vue";
const props = defineProps({
  userInfo: Object,
});
const form = ref(null);
const submmited = inject("submitted");
const school = computed(() => {
  const id = "school";
  const value = props.userInfo[id];
  return { id, value };
});

const major = computed(() => {
  const id = "email";
  const value = props.userInfo[id];
  return { id, value };
});

const degree = computed(() => {
  const id = "degree";
  const value = props.userInfo[id];
  return { id, value };
});

const since = computed(() => {
  const id = "since";
  const value = props.userInfo[id];
  return { id, value };
});

const end = computed(() => {
  const id = "end";
  const value = props.userInfo[id];
  return { id, value };
});

watch(submmited, (newState) => {
  // newState: true or false
  if (newState) {
    const formData = new FormData(form.value);
    const userInputs = { to: "education" };
    for (const [key, value] of formData.entries()) {
      userInputs[key] = value;
    }
    storeLocal(userInputs);
  }
});
</script>

<template>
  <form class="w-full px-4 grid grid-rows-5 gap-y-3" ref="form">
    <info-block :info="school">School</info-block>
    <info-block :info="major">Major</info-block>
    <info-block :info="degree">Degree</info-block>
    <info-block :info="since" inputType="date">Since</info-block>
    <info-block :info="end" inputType="date">End</info-block>
  </form>
</template>

<style></style>
