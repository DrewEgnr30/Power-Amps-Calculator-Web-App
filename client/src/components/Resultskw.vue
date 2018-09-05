<template>
  <div>
    <b-row class="text-center">
      <b-col>
        <h5>{{ msg }}: {{kw}} kW</h5>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Resultskw',
  data () {
    return {
      msg: 'Calculated Power',
      kw: this.$route.params.kw
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
