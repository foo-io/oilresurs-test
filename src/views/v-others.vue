<template>
  <div class="others">
    <div class="others__title">Другие способы регистрации</div>
    <div class="others__items">
      <div class="others__item" v-if="method !== 'sberbank'">
        <button class="others__item-button others__item-default" @click="changeMethod('sberbank')">
          Войти по Сбербанк ID
        </button>
      </div>
      <div class="others__item" v-if="method !== 'email'">
        <button class="others__item-button others__item-default" @click="changeMethod('email')">
          Войти по E-mail
        </button>
      </div>
      <div class="others__item" v-if="method !== 'phone'">
        <button class="others__item-button others__item-default" @click="changeMethod('phone')">
          По номеру телефона
        </button>
      </div>
      <div class="others__item">
        <button class="others__item-button others__item-gmail">
          <img src="@/assets/img/icon-gmail.svg" alt="Gmail" class="others__item-icon">
          Gmail
        </button>
      </div>
      <div class="others__item">
        <button class="others__item-button others__item-facebook">
          <img src="@/assets/img/icon-facebook.svg" alt="Facebook" class="others__item-icon">
          Facebook
        </button>
      </div>
      <div class="others__item">
        <button class="others__item-button others__item-vk">
          <img src="@/assets/img/icon-vk.svg" alt="Вконтакте" class="others__item-icon">
          Вконтакте
        </button>
      </div>
      <div class="others__item">
        <button class="others__item-button others__item-icloud">
          <img src="@/assets/img/icon-icloud.svg" alt="Icloud" class="others__item-icon">
          Icloud
        </button>
      </div>
    </div>
  </div>
  <!-- /.others -->
</template>

<script>
export default {
  name: "v-others",
  computed: {
    method() {
      return this.$store.getters.getMethod
    }
  },
  methods: {
    changeMethod(method) {
      this.$store.dispatch('changeTab', 'auth')
      this.$store.dispatch('changeMethod', method)
    }
  }
}
</script>

<style scoped lang="scss">
.others {
  display: flex;
  flex-direction: column;

  margin-top: 29px;

  &__title {
    display: flex;
    justify-content: center;
    margin-bottom: 23px;

    font-family: 'Museo Sans Cyrl 300', sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
  }

  &__item {
    display: flex;
    border-radius: 2px;
    overflow: hidden;
    width: 50%;
    height: 42px;
    padding: 0 10px;
    margin-bottom: 20px;

    &:nth-last-child(-n+2) {
      margin-bottom: 0;
    }

    &-button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;
      cursor: pointer;
      outline: none;

      font-family: 'Museo Sans Cyrl 700', sans-serif;
      font-weight: normal;
      font-style: normal;
      font-size: 9px;
      line-height: 150%;
      letter-spacing: 0.05em;
      text-transform: uppercase;

      border: 1px solid #E0E0E0;
      border-radius: 2px;

      transition: color 0.2s ease-out;

      &:hover {
        color: #72AF32;
      }
    }

    &-default {
      background: #FFFFFF;
      color: #000;
    }

    &-icon {
      display: flex;
      margin-right: 6px;
    }

    &-gmail {
      background: #EFEFEF;
      border-color: #EFEFEF;
    }

    &-facebook {
      background: #39569A;
      border-color: #39569A;
      color: #FFF;
    }

    &-vk {
      background: #5181B8;
      border-color: #5181B8;
      color: #FFF;
    }

    &-icloud {
      background: #2196F3;
      border-color: #2196F3;
      color: #FFF;
    }
  }
}
</style>
