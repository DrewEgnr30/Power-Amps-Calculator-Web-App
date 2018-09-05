<template>
  <div>
    <b-row class="text-center">
      <b-col>
        <h5>{{ msg }}</h5>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col class="text-right" cols="6" md="2">
        <label>Current Type: </label>
      </b-col>
      <b-col cols="8" md="6">
        <b-form-select v-model="selected" :options="options"/>
      </b-col>
    </b-row>
    <b-row class="mt-2" align-h="center">
      <b-col class="text-right" cols="6" md="2">
        <label>Current in amps: </label>
      </b-col>
      <b-col cols="8" md="5">
        <b-form-input v-model="amps" :state="currentStateAmps" type="number"></b-form-input>
      </b-col>
      <b-col class="text-left" cols="6" md="1">
        <label class="kW-lbl">A</label>
      </b-col>
    </b-row>
    <b-row v-if="selected === 'c'" class="mt-2" align-h="center">
      <b-col class="text-right" cols="6" md="2">
        <label>Voltage Type: </label>
      </b-col>
      <b-col cols="8" md="6">
        <b-form-select v-model="selected_volt" :options="options_volt"/>
      </b-col>
    </b-row>
    <b-row class="mt-2" align-h="center">
      <b-col class="text-right" cols="6" md="2">
        <label>Voltage in volts: </label>
      </b-col>
      <b-col cols="8" md="5">
        <b-form-input v-model="volts" :state="currentStatevolts" type="number"></b-form-input>
      </b-col>
      <b-col class="text-left" cols="6" md="1">
        <label>V</label>
      </b-col>
    </b-row>
    <b-row v-if="selected !== 'a'" class="mt-2" align-h="center">
      <b-col class="text-right" cols="6" md="2">
        <label>Power factor: </label>
      </b-col>
      <b-col cols="8" md="5">
        <b-form-input v-model="pf" :state="currentStatepf" type="text"></b-form-input>
      </b-col>
      <b-col class="text-left" cols="6" md="1">
        <label></label>
      </b-col>
    </b-row>
    <b-row class="mt-2 text-center">
      <b-col>
        <b-button @click="calculate_amps" variant="outline-primary">Calculate</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'KWToAmps',
  data () {
    return {
      msg: 'Amps to kW',
      selected: null,
      selected_volt: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'DC' },
        { value: 'b', text: 'AC - Single Phase' },
        { value: 'c', text: 'AC - Three Phase' }
      ],
      options_volt: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'Line to line voltage' },
        { value: 'b', text: 'Line to neutral voltage' }
      ],
      kW: 0,
      volts: '',
      pf: '',
      amps: ''
    }
  },
  methods: {
    calculate_amps: function () {
      switch (this.selected) {
        case 'a':
          this.kW = Math.round((this.amps * this.volts / 1000) * 100) / 100
          break
        case 'b':
          this.kW = Math.round((this.pf * this.amps * this.volts / 1000) * 100) / 100
          break
        case 'c':
          if (this.selected_volt === 'a') {
            this.kW = Math.round((Math.sqrt(3) * this.pf * this.amps * this.volts / 1000) * 100) / 100
          } else if (this.selected_volt === 'b') {
            this.kW = Math.round((3 * this.pf * this.amps * this.volts / 1000) * 100) / 100
          }
          break
      }
      this.$router.push({name: 'Resultskw', params: {kw: this.kW}})
    }
  },
  computed: {
    currentStateAmps () {
      return this.amps >= 0
    },
    currentStatevolts () {
      return this.volts >= 0
    },
    currentStatepf () {
      return parseFloat(this.pf) >= 0 && parseFloat(this.pf) <= 1
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
