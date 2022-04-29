<template>
  <div class="flex justify-between mb-1 pr-10">
    <label :for="labelId">{{ labelValue }}</label>
    <input
      ref="input"
      class="ml-1 border"
      :id="labelId"
      :name="labelId"
      :type="inputType"
      :pattern="valueFormat"
      :required="isRequired"
      :value="inputValue"
      @blur="checkValidity"
      @input="checkValidity"
    />
  </div>
</template>

<script>
// ^|
export default {
  name: 'InputSet',
  props: {
    labelId: {
      type: String,
      default: 'Default'
    },
    inputType: {
      type: String,
      default: 'text'
    },
    inputPattern: {
      type: Object,
      default: () => ({ format: null, errMsg: '' })
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    inputValue: {
      default: ''
    }
  },
  data () {
    return {

    }
  },
  computed: {
    labelValue () {
      return this.labelId[0].toUpperCase() + this.labelId.slice(1) + ':'
    },
    valueFormat () {
      return this.inputPattern.format
    },
    onInvalidMsg () {
      return this.inputPattern.errMsg
    }
  },
  methods: {
    checkValidity () {
      if (this.$refs.input.validity.patternMismatch) {
        this.$refs.input.setCustomValidity(this.onInvalidMsg)
      } else {
        this.$refs.input.setCustomValidity('')
      }
    }
  }
}
</script>
