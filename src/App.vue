<template>
  <LoginPage />
  <Credits />
</template>

<script>
import LoginPage from './components/Login.vue'
import Credits from './components/Credits.vue'

export default {
  name: 'App',
  components: {
    LoginPage,
    Credits
  }
}
</script>

<style lang="scss">@import './assets/scss/main.scss';</style>
