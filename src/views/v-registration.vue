<template>
  <form class="registration" autocomplete="off">
    <div class="grid">
      <div class="grid__row">
        <div class="grid__col">
          <CLabel
              id="name"
              title="ФИО"
              tooltip="Введите ФИО"
              type="text"
              placeholder="Константинопольский Константин Конст..."
              @value="onName"
              :error="errors.name"
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
              @value="onPhone"
              :error="errors.phone"
          ></CLabel>
        </div>
        <div class="grid__col grid__col-50">
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
  data() {
    return {
      name: {
        full: null,
        first: null,
        middle: null,
        last: null,
      },
      password: null,
      phone: null,
      email: null,

      errors: {
        name: false,
        password: false,
        phone: false,
        email: false,
      },
      errorsText: []
    }
  },
  methods: {
    onName(value) {
      this.name.full = value
    },
    onPassword(value) {
      this.password = value
    },
    onPhone(value) {
      this.phone = value
    },
    onEmail(value) {
      this.email = value
    },
    destructName() {
      const fullName = this.name.full
      const arrayName = fullName.split(' ')

      this.name.first = arrayName[1] ? arrayName[1] : '-'
      this.name.middle = arrayName[2] ? arrayName[2] : '-'
      this.name.last = arrayName[0] ? arrayName[0] : '-'
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
      const name = this.name.full
      const password = this.password
      const phone = this.phone
      const email = this.email

      // check name
      let arrayName = []
      try {
        arrayName = name.split(' ')
      } catch {
        arrayName = []
      }

      if (arrayName.length !== 3) {
        this.errorsText.push('Введите ФИО')
        this.errors.name = true
      }

      if (password === null) {
        this.errorsText.push('Пароль должен быть длиннее 3 символов')
        this.errors.password = true
      }

      if (!this.validEmail(email)) {
        this.errorsText.push('Введите корректный E-mail')
        this.errors.email = true
      }

      if (!this.validPhone(phone)) {
        this.errorsText.push('Введите корректный номер телефона')
        this.errors.phone = true
      }

      return this.errorsText.length
    },
    validEmail(email) {
      // vue docs:
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    validPhone(phone) {
      // https://www.regextester.com/99415
      let tel = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm
      return tel.test(phone)
    },
    send() {
      // checkin
      if (this.checkin() === 0) {
        // destruct full name
        this.destructName();

        // create object for send api
        const user = {
          firstName: this.name.first,
          middleName: this.name.middle,
          lastName: this.name.last,
          phone: this.phone,
          email: this.email,
          password: this.password,
        }

        // this we send new object `user` send api
        console.log('Send API:', user)
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
