<template>
  <div id="app" class="flex flex-col items-center">
    <info-card>
      <general-info :userInfo="generalInfo" @updateInfo="storeData(data)"></general-info>
    </info-card>
    <info-card></info-card>
    <info-card></info-card>
  </div>
</template>

<script>
import { appData } from "./utils/dataHandler";
import InfoCard from "./components/InfoCard.vue";
import GeneralInfo from "./components/GeneralInfo.vue";

export default {
  name: "App",
  components: {
    InfoCard,
    GeneralInfo,
  },
  data() {
    return {
      initialized: false,
      submitted: false,
    };
  },
  computed: {
    userInfo() {
      return { ...appData() };
    },
    generalInfo() {
      return this.userInfo.general
    },
    educationInfo() {
      return this.userInfo.education
    },
    jobInfo() {
      return this.userInfo.job
    }
  },
  methods: {
    setSubmitted() {
      this.submitted = !this.submitted;
      return this.submitted;
    },
    storeData(data) {
      console.log(data)
    }
  },
  provide() {
    return {
      submitted: () => this.submitted,
      setSubmitted: this.setSubmitted,
    };
  },
  created() {
    appData();
  },
};
</script>
