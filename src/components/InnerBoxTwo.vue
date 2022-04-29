<template>
  <p>I'm the second child of the OuterBox component</p>
</template>

<script>
export default {
  name: 'InnerBoxTwo',
  data () {
    return {
      name: 'InnerBoxTwo'
    }
  }
}
</script>

<style scoped>
p {
    color: blue;
}
</style>