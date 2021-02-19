<template>
  <footer class="footer">

    <div class="footer__copyright">
      © 2020 Trader-Oil. All rights reserved
    </div>

    <div class="footer__links">
      <a href="#" class="footer__links-item">Правила использования</a>
      <a href="#" class="footer__links-item">Политика конфеденциальности</a>
    </div>

    <div class="footer__developers">
      <a href="#" class="footer__developers-link">Сделано в Affetta</a>
    </div>

  </footer>
  <!-- /.footer -->

</template>

<script>
export default {
  name: "l-footer"
}
</script>

<style scoped lang="scss">
.footer {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: space-between;

  font-family: 'Museo Sans Cyrl 300', sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 13px;
  line-height: 24px;
  color: #B1B1B1;

  margin: 45px 0 15px;

  &__links {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    margin: 0 15px;

    &-item {
      color: #0F0F0F;
      opacity: 0.5;
      margin-right: 26px;

      transition: opacity 0.2s ease-out;

      &:hover {
        opacity: 1;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    @media screen and (max-width: 768px) {
      margin: 5px 0;
    }
    @media screen and (max-width: 375px) {
      flex-direction: column;
    }
  }

  &__developers {
    &-link {
      color: #B1B1B1;
      transition: color .2s ease-out;

      &:hover {
        color: #0F0F0F;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 425px) {
    margin-top: 25px;
  }
}
</style>
