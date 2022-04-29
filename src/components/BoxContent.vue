<template>
  <div>
    <small class="message" v-show="show">The grandchild of InnerBox</small>
    <small class="success" v-show="show">The grandchild of InnerBox</small>
    <small class="error" v-show="show">The grandchild of InnerBox</small>
    <small class="warning" v-show="show">The grandchild of InnerBox</small>
  </div>
</template>

<script>
export default {
  name: 'BoxContent',
  inject: ['isShow'],
  computed: {
    show () {
      return this.isShow()
    }
  }
}
</script>

<style lang="scss" scoped>
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}

</style>