<template>
  <section class="page login">
    <div class="inner">
      <div class="header">
        <h1>TON Gram Wallet</h1>
      </div>
      <div class="block main">
        <div class="description">
          <p>Using our service. you are available to perform transactions within Telegram Open Network [TON].</p>
          <p>The TON Platform is launched in the test mode now. Test Gram Tokens have not a material value, and can not be exchanged to any legitimate currency.</p>
          <p>You will be able to use the real TON Grams as soon as Master Network will be launched.</p>
        </div>
        <form>
          <div class="control">
            <label for="public">
              <input
                id="public"
                v-model="login"
                type="text"
              />
            </label>
            <input
              @click.prevent.stop="createNewWallet"
              type="submit"
              value="New Wallet"
            />
            <input
              v-if="login"
              @click.prevent.stop="getWalletInfo"
              type="submit"
              value="Login"
            />
            <input
              v-if="address"
              @click.prevent.stop="getWalletInfo"
              type="submit"
              value="Info"
            />
            <input
              v-if="address"
              @click.prevent.stop="begGrams"
              type="submit"
              value="Get Grams"
            />
          </div>
        </form>
        <pre class="wallet">
          {{ response }}
        </pre>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginPage',

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

  data: () => ({
    login: '',
    response: {},
  }),

  methods: {
    async createNewWallet () {
      const response = await fetch('https://tonapi.org/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        cache: 'no-cache',
        body: 'token=59a79a3ac31bf5486caa7c5d5e76ae83',
      })

      this.response = await response.json()
      this.$emit('wallet:new', this.response)
    },

    async getWalletInfo () {
      const response = await fetch('https://tonapi.org/account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        cache: 'no-cache',
        body: `token=59a79a3ac31bf5486caa7c5d5e76ae83&address=${this.login || this.address}`,
      })

      this.response = await response.json()

      if (this.response.empty) {
        this.response.address = this.login
      }

      this.$emit('wallet:login', this.response)
    },

    async begGrams () {
      const response = await fetch('https://tonapi.org/beg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        cache: 'no-cache',
        body: `token=59a79a3ac31bf5486caa7c5d5e76ae83&address=${this.address}`,
      })

      this.response = await response.json()
      this.$emit('wallet:beg', this.response)
    },
  },
}
</script>
