<template>
  <div class="verify">
    <h3 class="verify__title">Введите код</h3>
    <div class="grid">
      <div class="grid__row">
        <div class="grid__col">
          <div class="verify__content">
            <PincodeInput
                v-model="code"
                placeholder="-"
            />
          </div>
        </div>
      </div>
      <div class="grid__row">
        <div class="grid__col">
          <div class="timer">
<!--            сюда таймер поставить, и класс у ссылки перевести в динамический, изи, но лень (уже 5-35 утра) -->
            <span class="timer__text">Через 59 сек.</span>
            <a href="#" class="link link__disabled">Отправишь ещё</a>
          </div>
        </div>
        <div class="grid__col">
          <div class="links">
            <a href="#" class="link link__right">Изменить номер</a>
            <a href="#" class="link link__right">Не приходит СМС?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PincodeInput from 'vue-pincode-input';

export default {
  name: "v-verify",
  components: { PincodeInput },
  data() {
    return {
      code: ''
    }
  }
}
</script>

<style lang="scss">
.verify {

  &__title {
    font-family: 'Museo Sans Cyrl 300', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 21px;
    line-height: 25px;
    text-align: center;
    color: #000000;
    margin: 0 0 30px;
  }
}

// pin
input.vue-pincode-input {
  max-width: none;
  width: 25%;
  height: 56px;
  margin: 0 20px 0 0;
  box-shadow: none;
  border: 1px solid #E0E0E0;
  border-radius: 4px;

  &:focus {
    box-shadow: none;
    border-color: #72AF32;
  }

  &:last-child {
    margin-right: 0;
  }
}

// timer
.timer {
  &__text {
    font-family: 'Museo Sans Cyrl 300', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    color: #828282;
  }
}
</style>
