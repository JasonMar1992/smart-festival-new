<template>
  <div id="app">
    <h1>A beautiful parrot got trapped behind some paper.</h1>
    <h2>Scratch them free!</h2>
    <vue-scratchable
      :brushOptions="brush"
      :hideOptions="hide"
      getPercentageCleared
      @percentageUpdate="updatePoints"
    >
      <div class="wrapper">
        <h3>23333</h3>
      </div>
    </vue-scratchable>
    <p>You scratched {{ percentage }}% free.</p>
    </div>
</template>

<script>
import VueScratchable from 'vue-scratchable';

export default {
  name: 'App',
  components: {
    VueScratchable,
  },
  data() {
    return {
      percentage: 0,
      hide: {
        type: 'color',
        value: '#c5c8ce',
      },
      brush: {
        size: 20,
        shape: 'round',
      },
    };
  },
  methods: {
    updatePoints(percentage) {
      this.percentage = percentage;
    },
  },
};
</script>

<style>
body {
  background-color: #333;
  margin: 0;
}

#app {
  font-family: 'Open Sans', sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
}

.vue-scratchable-wrapper {
  background-color: white;
}

h3 {
  color: #2c3e50;
  text-align: center;
}

a {
  color: #2196f3;
}
</style>
