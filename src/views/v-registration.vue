<template>
  <form class="registration">
    <div class="grid">
      <div class="grid__row">
        <div class="grid__col">
          <CLabel
              id="name"
              title="ФИО"
              tooltip="Введите ФИО"
              type="text"
              placeholder="Константинопольский Константин Конст..."
          ></CLabel>
        </div>
      </div>
      <div class="grid__row">
        <div class="grid__col grid__col-50">
          <CLabel
              id="phone"
              title="Телефон"
              tooltip="Введите телефон"
              type="tel"
              placeholder="+7 (900) 000-00-00"
          ></CLabel>
        </div>
        <div class="grid__col grid__col-50">
          <CLabel
              id="email"
              title="E-mail"
              tooltip="Введите email"
              type="email"
              placeholder="example@mail.com"
          ></CLabel>
        </div>
      </div>
      <div class="grid__row">
        <div class="grid__col">
          <CLabel
              id="password"
              title="Пароль"
              tooltip="Введите пароль"
              type="password"
              placeholder="—"
          ></CLabel>
        </div>
      </div>
    </div>

    <button class="button">
      <span class="button__text">Зарегистироваться</span>
    </button>
    <div class="accept">
      Создавая аккаунт, вы соглашаетесь с <a href="#" class="accept__link">правилами платформы</a> и&nbsp;<a href="#" class="accept__link">обработкой персональных данных</a>
    </div>
  </form>
</template>

<script>
import CLabel from "@/components/c-label";

export default {
  name: "v-registration",
  components: {CLabel},
}
</script>

<style scoped lang="scss">
//button
.button {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  font-family: 'Museo Sans Cyrl 700', sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 13px;
  line-height: 16px;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  position: relative;
  border-radius: 2px;
  width: 100%;
  border: 0;
  height: 57px;
  cursor: pointer;
  background-image: linear-gradient(107.75deg, #72AF32 0%, #4B9B3F 100%), linear-gradient(76.59deg, #6C9E39 1.93%, #79B041 98.89%);
  transition: opacity .2s ease-out;
  margin-top: 24px;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    opacity: 0;
    transition: opacity .2s ease;
  }
  &:hover {
    &::before {
      opacity: 1;
      background-image: linear-gradient(157.9deg,#7bc52e 23.86%,#4cab3d 75.28%);
    }
  }
  &__text {
    position: relative;
    z-index: 1;
  }
}

//accept
.accept {
  font-family: 'Museo Sans Cyrl 300', sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #545454;
  margin-top: 17px;
  &__link {
    color: #545454;
    transition: color .2s ease-out;

    &:hover {
      color: #72AF32;
    }
  }
}
</style>
