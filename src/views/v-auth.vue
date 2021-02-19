<template>
  <form class="auth">
    auth status: {{ userStatus }}
    <div class="grid">
      <div class="grid__row">
        <div class="grid__col">
          <CLabel
              id="email"
              title="E-mail"
              tooltip="Введите email"
              type="email"
              placeholder="example@mail.com"
              @value="onEmail"
              :error="errors.email"
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
              @value="onPassword"
              :error="errors.password"
          ></CLabel>
        </div>
      </div>
    </div>

    <button class="button" @click.prevent="send">
      <span class="button__text">Войти</span>
    </button>
    <div class="accept">
      Создавая аккаунт, вы соглашаетесь с <a href="#" class="accept__link">правилами платформы</a> и&nbsp;<a href="#" class="accept__link">обработкой персональных данных</a>
    </div>
  </form>
</template>

<script>
import CLabel from "@/components/c-label";

export default {
  name: "v-auth",
  components: {CLabel},
  data() {
    return {
      email: null,
      password: null,

      errors: {
        password: false,
        email: false,
      },
      errorsText: []
    }
  },
  computed: {
    userStatus() {
      return this.$store.getters.getAuthStatus
    }
  },
  methods: {
    onPassword(value) {
      this.password = value
    },
    onEmail(value) {
      this.email = value
    },
    resetErrors() {
      this.errorsText = []

      for (let item in this.errors) {
        this.errors[item] = false
      }
    },
    checkin() {
      // reset all errors
      this.resetErrors()

      // vars
      const password = this.password
      const email = this.email

      if (password === null) {
        this.errorsText.push('Введите пароль')
        this.errors.password = true
      }

      if (!this.validEmail(email)) {
        this.errorsText.push('Введите корректный E-mail')
        this.errors.email = true
      }

      return this.errorsText.length
    },
    validEmail(email) {
      // vue docs:
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    send() {
      // checkin
      if (this.checkin() === 0) {
        // create object for send api
        const user = {
          email: this.email,
          password: this.password,
        }

        if (this.userStatus === false) {
          this.$store.dispatch('authUser', user.email, user.password)

          // this we send new object `user` send api
          console.log('Send API:', user)
        } else {
          console.log('Auth: You Authorized!')
        }
      }
    }
  }
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
