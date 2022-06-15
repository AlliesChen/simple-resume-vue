<template>
  <div id="app" class="flex flex-col items-center">
    <InfoCard :userInfo='userInfo' :submitted='submitted' >GeneralInfo</InfoCard>
  </div>
</template>

<script>
// import OuterBox from './components/OuterBox.vue'
import InfoCard from './components/InfoCard.vue'

export default {
  name: 'App',
  components: {
    InfoCard
  },
  data () {
    return {
      userInfo: {
        name: '',
        email: '',
        phone: ''
      },
      initialized: false,
      submitted: false
    }
  },
  created () {
    const appData = !!localStorage.getItem('appData')
    if (!appData) {
      localStorage.setItem('appData', JSON.stringify(this.$data))
    } else {
      this.submitted = appData.submitted
    }
  }
}
</script>
