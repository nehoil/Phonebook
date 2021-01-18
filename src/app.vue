<template>
  <div id="app">
    <div class="nav-container">
      <div class="nav-content">
        <div class="logo">
          <router-link to="/">
          <h2 @click="showMenu = false">PhoneBook</h2>
          </router-link>
          </div>
        <div class="main-menu">
          <ul :class="{show: showMenu}" @click="showMenu = false">
            <li>Login</li>
            <li>My Orders</li>
            <li>My Pricing</li>
            <li>Update Details</li>
            <li>Reset Password</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div class="hamburger" @click="showMenu = !showMenu">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss">
</style>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  created() {
    this.$store.dispatch({
      type: 'loadContacts',
    });
  },
  methods: {},
};
</script>
