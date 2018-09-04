<template>
  <div>
    <b-row class="text-center">
      <b-col>
        <h5>{{ msg }}</h5>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'KWToAmps',
  data () {
    return {
      msg: 'kW to Amps'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  width: 150px;
  height: auto;
}
</style>
