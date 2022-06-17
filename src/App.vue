<template>
  <div id="app" class="p-4 flex flex-col items-center">
    <button
      @click.prevent="submitForm"
      :class="[
        submitted
          ? 'bg-amber-200 text-amber-800 w-14'
          : 'bg-green-600 text-green-50',
        'self-end rounded py-1 px-2 text-sm disabled:bg-gray-300',
      ]"
      :disabled="!validity"
    >
      {{ this.submitted ? "Edit" : "Submit" }}
    </button>
    <info-card>
      <h1 class="text-center text-xl font-semibold mb-4">General</h1>
      <general-info
        class="col-start-2 row-start-2"
        :userInfo="generalInfo"
      ></general-info>
    </info-card>
    <info-card>
      <h1 class="text-center text-xl font-semibold mb-4">Education</h1>
      <education-info
        class="col-start-2 row-start-2"
        :userInfo="educationInfo"
      ></education-info>
    </info-card>
    <info-card>
      <h1 class="text-center text-xl font-semibold mb-4">Job</h1>
      <job-info class="col-start-2 row-start-2" :userInfo="jobInfo"></job-info>
    </info-card>
  </div>
</template>

<script>
import { appData } from "./utils/dataHandler";
import InfoCard from "./components/InfoCard.vue";
import GeneralInfo from "./components/GeneralInfo.vue";
import EducationInfo from "./components/EducationInfo.vue";
import JobInfo from "./components/JobInfo.vue";

export default {
  name: "App",
  components: {
    InfoCard,
    GeneralInfo,
    EducationInfo,
    JobInfo,
  },
  data() {
    return {
      userInfo: {},
      submitted: false,
      validity: true,
    };
  },
  computed: {
    generalInfo() {
      return this.userInfo.general;
    },
    educationInfo() {
      return this.userInfo.education;
    },
    jobInfo() {
      return this.userInfo.job;
    },
  },
  methods: {
    setSubmitted(state) {
      this.submitted = state;
      return this.submitted;
    },
    setValidity(state) {
      this.validity = state;
      return this.validity;
    },
    submitForm() {
      this.setSubmitted(!this.submitted);
      this.userInfo = appData();
    },
  },
  provide() {
    return {
      submitted: () => this.submitted,
      validity: () => this.validity,
      setSubmitted: this.setSubmitted,
      setValidity: this.setValidity,
    };
  },
  created() {
    this.userInfo = appData();
  },
};
</script>
