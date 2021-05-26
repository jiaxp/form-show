<template>
  <div class="form-show_col" :style="colStyle">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FormShowCol',
  props: {
    span: {
      type: Number,
      default: 24
    }
  },
  data () {
    return {}
  },
  computed: {
    form () {
      let parent = this.$parent
      let parentName = parent.$options.name
      while (parentName !== 'FormShow') {
        parent = parent.$parent
        parentName = parent.$options.name
      }
      return parent
    },
    colStyle () {
      let span = Math.min(24, this.span)
      return {
        width: `${((100 * span) / 24)}%`,
        borderColor: `${this.form.borderColor}`
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .form-show_col {
    border-right: 1px solid #E4E7ED;
    border-bottom: 1px solid #E4E7ED;
  }
</style>
