<template>
  <div>
    bbb
  </div>
</template>

<script>
import VueAdBlockDetect from 'vue-adblock-detect';

export default {
  mixins: [VueAdBlockDetect],
  beforeMount() {
    this.detectAdBlock().then((response) => {
      if (response) {
        console.log('with ad block');
      } else {
        console.log('no ad block');
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
