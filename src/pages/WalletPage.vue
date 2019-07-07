<template>
  <section class="page wallet">
    <div class="inner">
      <div class="header">
        <h2>Wallet</h2>
        <button
          @click="$emit('wallet:logout')"
          class="btn btn-primary"
        >Log Out</button>
      </div>
      <main>
        <router-view v-bind="$props" />
      </main>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WalletPage',

  props: {
    lt: { type: String, default: () => '' },
    hash: { type: String, default: () => '' },
    chain: { type: String, default: () => '' },
    seqno: { type: String, default: () => '' },
    short: { type: String, default: () => '' },
    value: { type: String, default: () => '' },
    address: { type: String, default: () => '' },
    regdata: { type: String, default: () => '' },
  },

  data () {
    return {

    }
  },
}
</script>
