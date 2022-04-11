<template>
  <div class="container h-100">
    <h1>Pipeline <small class="text-secondary">Process</small></h1>
    <hr/>
    <h5>
      <span style="color: var(--bs-pink)">{{ name }}</span>
      <router-link :to="`/pipeline/${ id }`" class="btn btn-link btn-sm float-end">Details</router-link>
    </h5>
    <hr/>

    <p>Input a galaxy identifier from the SDSS database, e.g. <code>1237648720693755918</code>, or process a random the object.</p>
    <form class="row row-cols-lg-auto g-3 align-items-center" @submit.prevent="submitForm">
      <div class="col-12">
        <label class="visually-hidden" for="inputObjId">obj ID</label>
        <div class="input-group">
          <div class="input-group-text">objID</div>
          <input type="text" class="form-control" id="inputObjId" value="1237648720693755918" style="width: 220px;">
        </div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary" id="inputSubmit" style="width: 72px;" data-bs-toggle="tooltip" data-bs-placement="top" title="Process object"><i class="fas fa-arrow-right"></i></button>
      </div>
      <div class="col-12">
        <button @click="submitRandom" class="btn btn-primary" type="button" style="width: 72px;" data-bs-toggle="tooltip" data-bs-placement="top" title="Random object"><i class="fas fa-random"></i></button>
      </div>
    </form>
    <br/>
    <div :key="objid" class="container p-3 border bg-light" :class="resp ? 'visible' : 'invisible'">
      <OutputsPipe v-bind:output="resp.output" v-if="resp" />
    </div>
    <br/>
    <div class="container p-3 border bg-light" :class="resp ? 'visible' : 'invisible'">
      <SDSSData v-bind:obj="resp.obj" v-if="resp" />
    </div>
  </div>
</template>

<script>
import OutputsPipe from '@/components/OutputsPipe.vue'
import SDSSData from '@/components/SDSSData.vue'
import config from '@/config.js'
import shared from '@/shared.js'

export default {
  components: {
    OutputsPipe, SDSSData
  },
  data () {
    return {
      id: this.$route.params.id,
      objid: '1237648720693755918',
      name: shared.PIPES_NAMES[this.$route.params.id],
      desc: shared.DESCS[this.$route.params.id],
      publicPath: process.env.BASE_URL,
      resp: null,
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
      this.y = []
      this.output = []
      document.getElementById('inputSubmit').innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'

      const objid = document.getElementById('inputObjId').value
      this.objid = objid
      fetch(`${ config.API }/proc/${ this.id }/${ objid }`)
        .then(resp => resp.json())
        .then(data => {
          if (data) {
            this.y = Object.keys(data.output)
            this.output = Object.values(data.output)
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
