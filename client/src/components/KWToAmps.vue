<template>
  <div>
    <b-row class="text-center">
      <b-col>
        <h5>{{ msg }}</h5>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col class="text-right" cols="2">
        <label>Current Type: </label>
      </b-col>
      <b-col cols="6">
        <b-form-select v-model="selected" :options="options"/>
      </b-col>
    </b-row>
    <b-row class="mt-2" align-h="center">
      <b-col class="text-right" cols="2">
        <label>Power in kW: </label>
      </b-col>
      <b-col cols="5">
        <b-form-input v-model="kW" :state="currentStatekW" type="number"></b-form-input>
      </b-col>
      <b-col class="text-left" cols="1">
        <label class="kW-lbl">kW</label>
      </b-col>
    </b-row>
    <b-row v-if="selected === 'c'" class="mt-2" align-h="center">
      <b-col class="text-right" cols="2">
        <label>Voltage Type: </label>
      </b-col>
      <b-col cols="6">
        <b-form-select v-model="selected_volt" :options="options_volt"/>
      </b-col>
    </b-row>
    <b-row class="mt-2" align-h="center">
      <b-col class="text-right" cols="2">
        <label>Voltage in volts: </label>
      </b-col>
      <b-col cols="5">
        <b-form-input v-model="volts" :state="currentStatevolts" type="number"></b-form-input>
      </b-col>
      <b-col class="text-left" cols="1">
        <label>V</label>
      </b-col>
    </b-row>
    <b-row v-if="selected !== 'a'" class="mt-2" align-h="center">
      <b-col class="text-right" cols="2">
        <label>Power factor: </label>
      </b-col>
      <b-col cols="5">
        <b-form-input v-model="pf" :state="currentStatepf" type="number"></b-form-input>
      </b-col>
      <b-col class="text-left" cols="1">
        <label></label>
      </b-col>
    </b-row>
    <b-row class="mt-2 text-center">
      <b-col>
        <b-button variant="outline-primary">Calculate</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'KWToAmps',
  data () {
    return {
      msg: 'kW to Amps',
      selected: null,
      selected_volt: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'DC' },
        { value: 'b', text: 'AC - Single Phase' },
        { value: 'c', text: 'AC - Three Phase'}
      ],
      options_volt: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'Line to line voltage' },
        { value: 'b', text: 'Line to neutral voltage' }
      ],
      kW: '',
      volts: '',
      pf: ''
    }
  },
  methods: {
  },
  computed: {
    currentStatekW () {
      return this.kW >= 0 ? true : false 
    },
    currentStatevolts () {
      return this.volts >= 0 ? true : false
    },
    currentStatepf () {
      return this.pf >= 0 ? true : false
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
