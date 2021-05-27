<template>
  <div class="form-show_item">
    <label ref="label" class="form-show_item__label" :title="label" :style="labelStyle">
      <span class="form-show_item__label__text">{{ label }}</span>
      <span class="form-show_item__label__suffix">{{ label ? form.labelSuffix : '' }}</span>
    </label>
    <div class="form-show_item__content" :style="contentStyle">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormShowItem',
  props: {
    label: String
  },
  data () {
    return {
      // labelWidth: undefined
    }
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
    labelWidth () {
      return this.form ? this.form.maxLabelWidth : undefined
    },
    labelStyle () {
      const ret = {}
      if (this.form.labelPosition === 'top') return ret
      const labelWidth = this.labelWidth
      const labelPosition = this.form.labelPosition
      if (labelWidth) {
        ret.width = labelWidth
      }
      if (labelPosition) {
        ret.textAlign = labelPosition
      }
      return ret
    },
    contentStyle () {
      return {
        borderColor: `${this.form.borderColor}`
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      let labelWidth = this.$refs.label.clientWidth
      if (!this.form.labelWidth) {
        this.form.setLabelWidth(labelWidth)
      }
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .form-show_item {
    height: 100%;
    font-size: 13px;
    color: #303133;
    line-height: 20px;
    display: flex;
    flex-direction: row;

    > .form-show_item__label {
      position: relative;
      color: #909399;
      font-weight: bold;
      padding: 6px 0px 6px 12px;
      display: flex;
      flex-direction: row;

      > .form-show_item__label__text {
        flex: 1;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        /*text-overflow: ellipsis;*/
      }

      > .form-show_item__label__suffix {
        min-width: 14px;
        text-align: center;
      }
    }

    > .form-show_item__content {
      flex: 1;
      word-break: break-all;
      border-left: 1px solid #E4E7ED;
      padding: 6px 12px;
    }
  }
</style>
