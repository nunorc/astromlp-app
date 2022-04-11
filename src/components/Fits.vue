<template>
  <tr>
    <td><span class="fw-bold">FITS Data</span> <span class="text-secondary">(61x61x5)</span></td>
  </tr>
  <tr>
    <td>
      <div class="row">
        <div class="col">u</div>
        <div class="col">g</div>
        <div class="col">r</div>
        <div class="col">i</div>
        <div class="col">z</div>
      </div>
      <div class="row">
        <div class="col"><img style="height: 100px;" id="fits_0" /></div>
        <div class="col"><img style="height: 100px;" id="fits_1" /></div>
        <div class="col"><img style="height: 100px;" id="fits_2" /></div>
        <div class="col"><img style="height: 100px;" id="fits_3" /></div>
        <div class="col"><img style="height: 100px;" id="fits_4" /></div>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    fits: Array
  },
  mounted() {
    document.getElementById('fits_0').setAttribute('src', 'data:image/jpg;base64,' + this.fits[0])
    document.getElementById('fits_1').setAttribute('src', 'data:image/jpg;base64,' + this.fits[1])
    document.getElementById('fits_2').setAttribute('src', 'data:image/jpg;base64,' + this.fits[2])
    document.getElementById('fits_3').setAttribute('src', 'data:image/jpg;base64,' + this.fits[3])
    document.getElementById('fits_4').setAttribute('src', 'data:image/jpg;base64,' + this.fits[4])
  }
}
</script>