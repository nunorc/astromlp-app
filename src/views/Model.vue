<template>
  <div class="container h-100">
    <h1>Model</h1>
    <hr/>
    <h5>
      <code v-html="fun"></code>
      <router-link :to="`/infer/${ id }`" class="btn btn-link btn-sm float-end">Infer</router-link>
    </h5>
    <hr/>

    <p>{{ desc[0] }}.</p>
    <p>{{ desc[1] }}</p>
    <p>{{ test }}</p>

    <br/>
    <h3>Network</h3>
    <div class="border m-4">
      <div id="zoom-img" v-bind:style="imgPros"></div>
      <div class="text-end text-muted fw-lighter" style="font-size: x-small;">Hover the image for zoom.</div>
    </div>

    <br/>
    <h3>Fit Performance</h3>
    <div class="m-4 text-center">
      <img class="border p-3" style="height: 380px;" :src="`${ publicPath }imgs/model_plots/${ this.$route.params.id }_plots.png`"/>
    </div>
  </div>
</template>

<script>
import shared from '../shared.js'

var addZoom = function (target) {
  var container = document.getElementById(target),
      imgsrc_ = container.currentStyle || window.getComputedStyle(container, false),
      imgsrc = imgsrc_.backgroundImage.slice(4, -1).replace(/"/g, ""),
      img = new Image()

  img.src = imgsrc
  img.onload = function () {
    var imgWidth = img.naturalWidth,
        imgHeight = img.naturalHeight,
        ratio = imgHeight / imgWidth

    container.onmousemove = function (e) {
      var boxWidth = container.clientWidth,
          rect = e.target.getBoundingClientRect(),
          xPos = e.clientX - rect.left,
          yPos = e.clientY - rect.top,
          xPercent = xPos / (boxWidth / 100) + "%",
          yPercent = yPos / ((boxWidth * ratio) / 100) + "%"

      Object.assign(container.style, {
        backgroundPosition: xPercent + ' ' + yPercent,
        backgroundSize: imgWidth + 'px'
      })
    }

    container.onmouseleave = function () {
      Object.assign(container.style, {
        backgroundPosition: 'center',
        backgroundSize: 'contain'
      })
    }
  }
}

export default {
  data () {
    return {
      id: this.$route.params.id,
      fun: shared.FUNS[this.$route.params.id],
      desc: shared.DESCS[this.$route.params.id],
      test: shared.TEST[this.$route.params.id],
      imgPros: {
        width: '100%',
        height: shared.HS[this.$route.params.id],
        backgroundImage: `url('${ process.env.BASE_URL }imgs/model/${ this.$route.params.id }.png'`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      },
      publicPath: process.env.BASE_URL
    }
  },
  mounted() {
    addZoom('zoom-img')
  }
}
</script>
