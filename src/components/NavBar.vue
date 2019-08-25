<template>
  <i-navbar>
    <i-navbar-brand :to="{ name: 'Home' }">Home</i-navbar-brand>
    <i-navbar-items class="_justify-content-end">
      <i-nav>
        <i-nav-item :to="{ name: 'Talents' }">Talents</i-nav-item>
        <i-nav-item :to="{ name: 'Professions' }">Professions</i-nav-item>

      </i-nav>
    </i-navbar-items>
  </i-navbar>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>

</style>
