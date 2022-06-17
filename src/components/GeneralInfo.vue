<template>
  <form
    class="grid grid-cols-2 grid-rows-3 grid-flow-col justify-items-center items-center"
    ref="form"
  >
    <div class="w-1/2 row-span-3">
      <img src="" alt="Portrait" />
    </div>
    <info-block :info="name">Name</info-block>
    <info-block :info="email" inputType="email">Email</info-block>
    <info-block :info="phone">Phone</info-block>
  </form>
</template>

<script>
import { VALIDATION, storeLocal } from "../utils/dataHandler";
import InfoBlock from "./InfoBlock.vue";
export default {
  props: {
    userInfo: Object,
  },
  emits: ["updateInfo"],
  components: {
    InfoBlock,
  },
  computed: {
    name() {
      const id = "name";
      const value = this.userInfo[id];
      const { format, errMsg } = VALIDATION.TEXT;
      return { id, value, format, errMsg };
    },
    email() {
      const id = "email";
      const value = this.userInfo[id];
      const { format, errMsg } = VALIDATION.EMAIL;
      return { id, value, format, errMsg };
    },
    phone() {
      const id = "phone";
      const value = this.userInfo[id];
      const { format, errMsg } = VALIDATION.NUMBER;
      return { id, value, format, errMsg };
    },
    isSubmitted() {
      return this.submitted();
    },
  },
  inject: ["submitted"],
  watch: {
    isSubmitted(newState) {
      // newState: true or false
      if (newState) {
        const formEl = this.$refs.form;
        const formData = new FormData(formEl);
        const userInputs = { to: "general" };
        for (const [key, value] of formData.entries()) {
          userInputs[key] = value;
        }
        storeLocal(userInputs);
      }
    },
  },
};
</script>

<style></style>
