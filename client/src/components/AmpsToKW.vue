<template>
  <div>
    <b-row v-if="selected === 'a'" class="text-center">
      <b-col>
        <h5>{{ msg }}</h5>
      </b-col>
    </b-row>
    <b-row class="text-center" align-h="center">
      <b-col cols="6">
        <b-form-select v-model="selected" :options="options"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'AmsToKW',
  data () {
    return {
      selected: null,
      msg: 'Amps to kW',
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'DC' },
        { value: 'b', text: 'AC - Single Phase' },
        { value: 'c', text: 'AC - Three Phase'}
      ]
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
