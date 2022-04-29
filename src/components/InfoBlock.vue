<template>
  <div class="mt-8 relative w-3/4 border rounded-lg p-2 shadow">
    <h1 class="text-center text-xl font-semibold mb-4">GeneralInfo</h1>
    <form class="grid grid-cols-2">
      <div>
        <img src="" alt="Portrait"/>
      </div>
      <div>
        <p v-if="isSubmitted" class="text-lg">{{ storedInfo.name }}</p>
        <InputSet v-if="!isSubmitted" labelId="name" :inputValue="storedInfo.name" :isRequired="true" :inputPattern="valuePattern.plainText" />
        <p v-if="isSubmitted">{{ storedInfo.email }}</p>
        <InputSet v-if="!isSubmitted" labelId="email" :inputValue="storedInfo.email" inputType="email"/>
        <p v-if="isSubmitted">{{ storedInfo.phone }}</p>
        <InputSet v-if="!isSubmitted" labelId="phone" :inputValue="storedInfo.phone" :inputPattern="valuePattern.numbers" />
      </div>
      <button @click.prevent="submitForm" class="absolute top-2 right-4 rounded py-1 px-2 text-sm" :class="buttonClass">{{ formStatus }}</button>
    </form>
</div>
</template>

<script>
import InputSet from './InputSet'

export default {
  props: ['cName'],
  name: 'GeneralInfo',
  components: {
    InputSet
  },
  data () {
    return {
      labelMap: {
        name: 'name',
        email: 'email',
        phone: 'phone'
      },
      valuePattern: {
        plainText: {
          format: "[^-0-9._!&\x22`'#%,:;<>=@{}~$()*+/\\?\\x5B\\x5D^|]+",
          errMsg: 'Please using words only'
        },
        numbers: {
          format: '[0-9]+',
          errMsg: 'Please use numbers only'
        }
      },
      isSubmitted: false
    }
  },
  computed: {
    formStatus () {
      return this.isSubmitted ? 'Edit' : 'Submit'
    },
    buttonClass () {
      return this.isSubmitted
        ? 'bg-amber-200 text-amber-800 w-14'
        : 'bg-green-600 text-green-100'
    },
    storedInfo () {
      return JSON.parse(localStorage.getItem(this.$options.name))
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
  },
  mounted () {
    const storedData = JSON.parse(localStorage.getItem(this.$options.name))
    console.log(this.labelMap)
    if (!storedData) {
      const initValue = {}
      this.labelMap.keys().forEach(key => {
        this.initValue[key] = ''
      })
      localStorage.setItem(this.$options.name, JSON.stringify(initValue))
    }
    const hasSubmitted = !!localStorage.getItem('InitialStatus')
    if (!hasSubmitted) {
      localStorage.setItem('InitialStatus', JSON.stringify(this.isSubmitted))
    } else {
      this.isSubmitted = hasSubmitted
    }
  }
}
</script>
