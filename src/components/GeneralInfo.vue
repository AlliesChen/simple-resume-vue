<template>
  <h1 class="text-center text-xl font-semibold mb-4">General</h1>
  <form
    class="grid grid-cols-2 grid-rows-3 justify-items-center items-center"
    ref="form"
  >
    <div class="w-1/2 row-span-3">
      <img src="../assets/images/Pikachu.png" alt="Portrait" />
    </div>
    <info-block :info="name">Name</info-block>
    <info-block :info="email" inputType="email">Email</info-block>
    <info-block :info="phone">Phone</info-block>
    <button
      @click.prevent="submitForm"
      :class="[
        submitted()
          ? 'bg-amber-200 text-amber-800 w-14'
          : 'bg-green-600 text-green-100',
        'absolute top-2 right-4 rounded py-1 px-2 text-sm',
      ]"
    >
      {{ this.submitted() ? "Edit" : "Submit" }}
    </button>
  </form>
</template>

<script>
import { VALIDATION } from "../utils/dataHandler";
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
  },
  inject: ["submitted", "setSubmitted"],
  methods: {
    submitForm() {
      if (this.submitted() === true) {
        return this.setSubmitted();
      }
      const formEl = this.$refs.form;
      if (formEl.checkValidity()) {
        const formData = new FormData(formEl);
        const userInputs = {};
        for (const [key, value] of formData.entries()) {
          userInputs[key] = value;
        }
        console.log(userInputs);
        Promise.resolve(() => {
          this.$emit("updateInfo", userInputs);
        }).then(() => {
          this.setSubmitted();
        });
      } else {
        formEl.reportValidity();
      }
    },
  },
};
</script>

<style></style>
