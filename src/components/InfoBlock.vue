<script setup>
import { ref, defineProps, inject } from "vue";
const props = defineProps({
  info: {
    type: Object,
    default() {
      return {
        id: "",
        value: "",
        format: "",
        errMsg: "",
      };
    },
  },
  inputType: {
    type: String,
    default: "text",
  },
});
const userInput = ref(props.info.value);
const submitted = inject("submitted")
function checkValidity(e) {
  if (e.target.validity.patternMismatch) {
    if (props.info.errMsg) {
      e.target.setCustomValidity(props.info.errMsg);
    }
    e.target.reportValidity();
  }
}
</script>

<template>
  <p v-if="submitted()">{{ info }}</p>
  <div v-else class="w-full flex justify-around">
    <label :for="info.id"><slot></slot></label>
    <input
      class="border rounded px-2"
      :type="inputType"
      :pattern="info.format"
      :id="info.id"
      :name="info.id"
      v-model="userInput"
      @blur="checkValidity"
    />
  </div>
</template>
