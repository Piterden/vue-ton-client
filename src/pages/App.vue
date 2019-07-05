<template>
  <div id="app">
    <div class="inner">
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    publicKey: null,
    privateKey: null,
  }),
}
</script>

<style lang="scss">
@import '../_variables';
@import '~bulma';
@import '../assets/fontello/css/fontello.css';

#app > .inner {
  font: 'Roboto Mono';
  background-color: $background;
  min-height: 800px;

  .display-inline {
    display: inline-block;
  }

  .control {
    position: relative;
    text-align: left;

    &.is-grouped {
      display: flex;
      justify-content: flex-start;

      > .control {
        flex-basis: 0;
        flex-shrink: 0;

        .is-expanded {
          flex-grow: 1;
          flex-shrink: 1;
        }

        &:not(:last-child) {
          margin-bottom: 0;
          margin-right: .75rem;
        }
      }
    }
  }

  .alignleft {
    float: left;
    padding-right: 10px;
  }
}

</style>
