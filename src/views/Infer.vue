<template>
  <div class="container h-100">
    <h1>Model <small class="text-secondary">Infer</small></h1>
    <hr/>
    <h5>
      <code v-html="fun"></code>
      <router-link :to="`/model/${ id }`" class="btn btn-link btn-sm float-end">Details</router-link>
    </h5>
    <hr/>

    <p>Input a galaxy identifier from the SDSS database, e.g. <code>1237648720693755918</code>, to infer data or select a random the object.</p>
    <form class="row row-cols-lg-auto g-3 align-items-center" @submit.prevent="submitForm">
      <div class="col-12">
        <label class="visually-hidden" for="inputObjId">obj ID</label>
        <div class="input-group">
          <div class="input-group-text">objID</div>
          <input type="text" class="form-control" id="inputObjId" value="1237648720693755918" style="width: 220px;">
        </div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary" id="inputSubmit" style="width: 72px;" data-bs-toggle="tooltip" data-bs-placement="top" title="Infer data"><i class="fas fa-arrow-right"></i></button>
      </div>
      <div class="col-12">
        <button @click="submitRandom" class="btn btn-primary" type="button" style="width: 72px;" data-bs-toggle="tooltip" data-bs-placement="top" title="Random object"><i class="fas fa-random"></i></button>
      </div>
    </form>
    <br/>
    <div :key="objid" class="container p-3 border bg-light" :class="resp ? 'visible' : 'invisible'">
      <table class="table">
        <thead><tr><th class="text-center">Model Inputs</th></tr></thead>
        <tbody>
          <Img v-bind:img="resp._img_base64" v-if="hasImg" />
          <Fits v-bind:fits="resp._fits_base64" v-if="hasFits" />
          <Spectra v-bind:waves="resp._waves_spectra" v-bind:spectra="resp.input.spectra" v-if="hasSpectra" />
          <Ssel v-bind:waves="resp._waves_ssel" v-bind:ssel="resp.input.ssel" v-if="hasSsel" />
          <Bands v-bind:bands="resp.input.bands[0]" v-if="hasBands" />
          <Wise v-bind:wise="resp.input.wise[0]" v-if="hasWise" />
        </tbody>
      </table>
      <Outputs v-bind:y="resp.y" v-bind:output="resp.output" v-bind:classes="resp._classes" v-if="resp" />
    </div>
    <br/>
    <div class="container p-3 border bg-light" :class="resp ? 'visible' : 'invisible'">
      <SDSSData v-bind:obj="resp.obj" v-if="resp" />
    </div>
  </div>
</template>

<script>
import Img from '@/components/Img.vue'
import Fits from '@/components/Fits.vue'
import Spectra from '@/components/Spectra.vue'
import Ssel from '@/components/Ssel.vue'
import Bands from '@/components/Bands.vue'
import Wise from '@/components/Wise.vue'
import Outputs from '@/components/Outputs.vue'
import SDSSData from '@/components/SDSSData.vue'
import config from '@/config.js'
import shared from '@/shared.js'

export default {
  components: {
    Img, Fits, Spectra, Ssel, Bands, Wise, Outputs, SDSSData
  },
  data () {
    return {
      id: this.$route.params.id,
      objid: '1237648720693755918',
      fun: shared.FUNS[this.$route.params.id],
      desc: shared.DESCS[this.$route.params.id],
      publicPath: process.env.BASE_URL,
      resp: null,
      hasImg: false,
      hasFits: false,
      hasSpectra: false,
      hasSsel: false,
      hasBands: false,
      hasWise: false
    }
  },
  mounted() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl, { trigger: 'hover' })
    })
  },
  methods: {
    submitForm() {
      this.resp = null
      this.hasImg = false
      this.hasFits = false
      this.hasSpectra = false
      this.hasSsel = false
      this.hasBands = false
      this.hasWise = false
      document.getElementById('inputSubmit').innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'

      const objid = document.getElementById('inputObjId').value
      this.objid = objid
      fetch(`${ config.API }/infer/${ this.id }/${ objid }`)
        .then(resp => resp.json())
        .then(data => {
          if (data) {
            this.hasImg = Object.keys(data.input).includes('img')
            this.hasFits = Object.keys(data.input).includes('fits')
            this.hasSpectra = Object.keys(data.input).includes('spectra')
            this.hasSsel = Object.keys(data.input).includes('ssel')
            this.hasBands = Object.keys(data.input).includes('bands')
            this.hasWise = Object.keys(data.input).includes('wise')

            this.resp = data
          }
          else {
            alert(`Invalid obj id ${ objid } or failed to get required data.`)
          }

          document.getElementById('inputSubmit').innerHTML = '<i class="fas fa-arrow-right"></i>'
        })
        .catch(err => alert(err))
    },
    submitRandom() {
      fetch(`${ config.API }/random/id`)
        .then(resp => resp.text())
        .then(data => {
          document.getElementById('inputObjId').value = data
          this.submitForm()
        })
    }
  }
}
</script>

<style>
.mymuted { color: #b0b4b6!important; font-size: 0.6rem; }
</style>