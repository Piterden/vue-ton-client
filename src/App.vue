<template>
  <div id="app">
    <div class="inner">
      <div class="container">
        <router-view
          @wallet:new="newWallet"
          @wallet:login="loginWallet"
          @wallet:logout="logoutWallet"
          v-bind="$data"
        />
      </div>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  name: 'App',

  data: () => ({
    lt: null,
    hash: null,
    chain: null,
    seqno: null,
    short: null,
    value: null,
    address: null,
    regdata: null,
    privateKey: null
  }),

  methods: {
    newWallet ({ key: privateKey, chain, short, address, regdata }) {
      this.chain = chain
      this.short = short
      this.address = address
      this.regdata = regdata
      this.privateKey = privateKey

      this.$router.push('/wallet/details')
    },

    loginWallet ({ value, lt, hash, chain, address, seqno }) {
      this.lt = lt
      this.hash = hash
      this.chain = chain
      this.seqno = seqno
      this.value = value
      this.address = address

      this.$router.push('/wallet/details')
    },

    logoutWallet () {
      this.lt = null
      this.hash = null
      this.chain = null
      this.seqno = null
      this.short = null
      this.value = null
      this.address = null
      this.regdata = null
      this.privateKey = null

      this.$router.push('/login')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto Mono';
  > .inner {
    min-height: 800px;

    .fas {
      font-size: 2.65em;
    }

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

    .header, .address, .actions, .balance {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .header {
      justify-content: space-between;
    }

    .actions {
      width: 50%;

      > div {
        align-items: center;
        display: flex;
        text-align: center;
      }
    }

    .icon {
      width: 60px;
      height: 48px;
      text-align: center;
      display: block;
    }
  }
}

</style>
