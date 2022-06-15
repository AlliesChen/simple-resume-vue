<template>
  <div class="mt-8 relative w-3/4 border rounded-lg p-2 shadow">
    <h1 class="text-center text-xl font-semibold mb-4"><slot></slot></h1>
    <form class="grid grid-cols-2">
      <div>
        <img src="" alt="Portrait"/>
      </div>
      <div>
        <InfoBlock>Name</InfoBlock>
        <InfoBlock>Email</InfoBlock>
        <InfoBlock>Phone</InfoBlock>
      </div>
      <button @click.prevent="submitForm" class="absolute top-2 right-4 rounded py-1 px-2 text-sm" :class="buttonClass">{{ formStatus }}</button>
    </form>
</div>
</template>

<script>
import InfoBlock from './InfoBlock'

export default {
  props: {
    userInfo: Object,
    submitted: Boolean
  },
  name: 'InfoBlock',
  components: {
    InfoBlock
  },
  data () {
    return {
      valuePattern: {
        plainText: {
          format: "[^-0-9._!&\x22`'#%,:;<>=@{}~$()*+/\\?\\x5B\\x5D^|]+",
          errMsg: 'Please using words only'
        },
        numbers: {
          format: '[0-9]+',
          errMsg: 'Please use numbers only'
        }
      }
    }
  },
  computed: {
    formStatus () {
      return this.submitted ? 'Edit' : 'Submit'
    },
    buttonClass () {
      return this.submitted
        ? 'bg-amber-200 text-amber-800 w-14'
        : 'bg-green-600 text-green-100'
    }
  },
  methods: {
    submitForm (e) {
      if (this.isSubmitted === true) {
        this.isSubmitted = !this.isSubmitted
        return
      }
      const formEl = e.target.closest('form')
      if (formEl.checkValidity()) {
        this.isSubmitted = !this.isSubmitted
        const formData = new FormData(formEl)
        const userInputs = {}
        for (const [key, value] of formData.entries(this.$options.name)) {
          userInputs[key] = value
        }
        localStorage.setItem(this.$options.name, JSON.stringify(userInputs))
      } else {
        formEl.reportValidity()
      }
    }
  }
}
</script>
