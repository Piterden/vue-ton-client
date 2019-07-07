<template>
  <div class="tab details">
    <div class="history">
      <div class="title"></div>
      <div class="head">
        <div class="date col"></div>
        <div class="type col"></div>
        <div class="from col"></div>
        <div class="to col"></div>
        <div class="amount col"></div>
      </div>
      <div class="body">
        <div class="row">
          <div class="date col"></div>
          <div class="type col"></div>
          <div class="from col"></div>
          <div class="to col"></div>
          <div class="amount col"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WalletDetailsTab',

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
}
</script>
