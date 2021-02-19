<template>
  <header class="header">
    <a href="#" class="header__logo">
      <img src="@/assets/img/logo.svg" alt="Oilresurs" class="header__logo-img">
    </a>
  </header>
  <!-- /.header -->
</template>

<script>
export default {
name: "l-header"
}
</script>

<style scoped lang="scss">
.header {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  margin: 30px 0 45px;

  &__logo {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;

    &-link {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  @media screen and (max-width: 425px) {
    margin: 25px 0;
  }
}
</style>
