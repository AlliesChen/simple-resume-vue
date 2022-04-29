<template>
  <div id="app" class="flex flex-col items-center">
    <InfoBlock cName="GeneralInfo"/>
  </div>
</template>

<script>
// import OuterBox from './components/OuterBox.vue'
import InfoBlock from './components/InfoBlock.vue'

export default {
  name: 'App',
  components: {
    InfoBlock
  }
}
</script>
