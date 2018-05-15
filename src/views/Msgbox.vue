<template>
  <div class="view msgbox">
    <a @click="__alertClick">alert</a>
    <a @click="__confirmClick">confirm</a>
    <a @click="__tooltipClick">tooltip</a>

    <PiAlert ref="alert" :isGlobal="true" />
    <PiConfirm ref="confirm" :isGlobal="true" />
    <PiTooltip ref="tooltip" :isGlobal="true" />
  </div>
</template>

<style lang="scss">
  .msgbox {
    padding: 20px;

    & > a {
      display: inline-block;
      line-height: 200%;
      padding: 0 1em;
      border: 1px solid #09f;
      color: #09f;
      border-radius: 0.3em;

      &:active {
        background: #eee;
      }
    }
  }
</style>

<script>
  import PiAlert from '../components/PiAlert.vue';
  import PiTooltip from '../components/PiTooltip.vue';
  import PiConfirm from '../components/PiConfirm.vue';

  export default {
    components: {
      PiAlert,
      PiConfirm,
      PiTooltip,
    },
    mounted() {

    },
    methods: {
      __alertClick() {
        this.$refs.alert.show({
          msg: `alert哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈${Date.now()}`,
          title: 'alert title',
          btnOkClick() {
            console.log('alert btnOkClick');
          },
        });
      },
      __confirmClick() {
        this.$refs.confirm.show({
          msg: `confirm哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈${Date.now()}`,
          title: 'confirm title',
          btnOkText: '好',
          btnOkClick() {
            console.log('confirm btnOkClick');
          },
          btnCancelText: 'cancel',
          btnCancelClick() {
            console.log('confirm btnCancelClick');
          },
        });
      },
      __tooltipClick() {
        this.$refs.tooltip.show(`哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈${Date.now()}`);
      },
    },
  };
</script>
