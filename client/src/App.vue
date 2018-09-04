<template>
  <div id="app">
    <b-row class="ml-4 mt-4" align-h="start">
      <b-col>
        <b-button @click="goBack" class="back-btn" variant="outline-primary">Back</b-button>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col>
        <img src="./assets/Quincy_logo.jpg">
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-view/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack: function () {
      if (this.$route.path === '/') {
        this.$router.push('/')
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style>
img{
  max-width: 300px;
  height: auto;
}

</style>
