<template>
  <div>
    <b-row class="text-center">
      <b-col>
        <h5>{{ msg }}: {{amps}} amps</h5>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Resultsamps',
  data () {
    return {
      msg: 'Calculated Amperage',
      amps: this.$route.params.amps
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
