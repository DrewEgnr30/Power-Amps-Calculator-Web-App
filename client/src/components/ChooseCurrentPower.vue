<template>
  <div>
    <b-row class="text-center">
      <b-col>
        <h5>{{ msg }}</h5>
      </b-col>
    </b-row>
    <b-row class="text-center mt-2">
      <b-col>
        <b-button @click="amps_to_kw" variant='outline-primary'>
          Amps to kW
        </b-button>
      </b-col>
    </b-row>
    <b-row class="text-center mt-2">
      <b-col>
        <b-button @click="kw_to_amps" variant='outline-primary'>
          kW to Amps
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'ChooseCurrentPower',
  data () {
    return {
      msg: 'Choose to calculate amps to kW or calculate kW to amps.'
    }
  },
  methods: {
    kw_to_amps: function () {
      this.$router.push('/power')
    },
    amps_to_kw: function () {
      this.$router.push('current')
    }
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
