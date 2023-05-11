<template>
  <RouterView />
  <Credits />
</template>


<script>
import Credits from './components/Credits.vue'

export default {
  name: 'App',
  components: {
    Credits,
  }
}
</script>