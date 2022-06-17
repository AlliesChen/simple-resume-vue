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
const submitted = inject("submitted");
const setValidity = inject("setValidity");
function checkValidity(e) {
  if (e.target.validity.patternMismatch) {
    setValidity(false);
    if (props.info.errMsg) {
      e.target.setCustomValidity(props.info.errMsg);
    }
    e.target.reportValidity();
  } else {
    setValidity(true);
  }
}
</script>

<template>
  <div class="w-full flex justify-between items-center">
    <label :for="info.id"><slot></slot></label>
    <textarea
      v-if="inputType === 'textarea'"
      :name="info.id"
      :id="info.id"
      class="w-3/4 h-16 px-2 border rounded disabled:bg-transparent disabled:border-none"
      v-model="userInput"
      :disabled="submitted()"
      style="resize: none"
    ></textarea>
    <input
      v-else
      class="w-3/4 h-8 px-2 border rounded disabled:bg-transparent disabled:border-none"
      :type="inputType"
      :pattern="info.format"
      :id="info.id"
      :name="info.id"
      v-model="userInput"
      @blur="checkValidity"
      :disabled="submitted()"
    />
  </div>
</template>
