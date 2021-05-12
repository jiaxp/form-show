<template>
  <div class="form-show" :style="styleCss">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FormShow',
  props: {
    labelWidth: [String, Number],
    labelSuffix: {
      type: String,
      default: '：'
    },
    labelPosition: {
      type: String,
      default: 'right'
    },
    backgroundColor: {
      type: String,
      default: '#ffffff'
    }
  },
  data () {
    return {
      maxLabelWidth: undefined
    }
  },
  computed: {
    styleCss () {
      return {
        backgroundColor: this.backgroundColor
      }
    }
  },
  created () {
    if (this.getObjectType(this.labelWidth) === 'String') {
      this.maxLabelWidth = this.labelWidth
    } else if (this.getObjectType(this.labelWidth) === 'Number') {
      this.maxLabelWidth = this.labelWidth + 'px'
    }
  },
  methods: {
    setLabelWidth (w) {
      let max = this.maxLabelWidth ? Number(this.maxLabelWidth.replace('px', '')) : 0
      this.maxLabelWidth = Math.max(max, w) + 'px'
    },
    getObjectType (s) {
      let str = Object.prototype.toString.call(s)
      let regex = /^\[object\s([a-zA-Z]+)\]$/
      return str.match(regex)[1]
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-show {
    width: 100%;
    border: 1px solid #E4E7ED;
    border-bottom: none;
    border-right: none;
    background-color: #fff;
  }
</style>
