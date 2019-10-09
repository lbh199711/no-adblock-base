<template>
  <div>
    {{adblock}}
  </div>
</template>

<script>
import VueAdBlockDetect from 'vue-adblock-detect';

export default {
  mixins: [VueAdBlockDetect],
  beforeMount() {
    this.detectAdBlock().then((response) => {
      if (response) {
        this.adblock = true;
      } else {
        this.adblock = false;
      }
    });
  },
  data() {
    return {
      adblock: null,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
