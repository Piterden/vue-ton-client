<template>
  <section class="page login">
    <div class="inner">
      <div class="header">
        <h1>TON Gram Wallet</h1>
      </div>
      <div class="block main">
        <div class="description">
          <p>Using our service. you are available to perform transactions within Telegram Open Netwnrk [TON].</p>
          <p>The TON Platform is launched in the test mode now. Test Gram Tokens have not a material value, and can not be exchanged to any legitimate currency.</p>
          <p>You will be able to use the real TON Grams as soon as Master Network will be launched.</p>
        </div>
        <form>
          <div class="control">
            <label for="public">
              <input id="public" type="text" />
            </label>
            <input type="submit" value="Login" />
            <input type="submit" value="New Wallet" />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginPage',

  data () {
    return {

    }
  },
}
</script>
