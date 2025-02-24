<script setup lang="ts">

</script>

<template>
    <div class="modal">
        <div class="title" v-if="1">Авторизация</div>
        <div class="title" v-else>Регистрация</div>
        <form class="text-field" @submit.prevent="">
            <div v-if="1">
                <label class="text-field__label" for="login">Логин</label>

                <input class="text-field__input" type="text" name="login" id="login" placeholder="Введите ваш логин" />
            </div>

            <div>
                <label class="text-field__label" for="login">E-mail</label>

                <input class="text-field__input" type="text" name="login" id="login" placeholder="foo2@gmail.com" />
            </div>

            <div>
                <label class="text-field__label" for="password">Пароль</label>

                <input class="text-field__input" type="password" name="password" id="password" placeholder="123"
                    autocomplete="on" />
            </div>
            <div class="flex-line">
                <button class="btn">Отправить</button>
                <span>или</span>
                <span class="register" @click="" v-if="1">Зарегистрироваться</span>
                <span class="register" @click="" v-else>Авторизироваться</span>
            </div>
        </form>
    </div>
</template>

<style scoped lang="scss">
.register {
    cursor: pointer;
    font-weight: 600;

    &:hover {
        color: green;
    }
}

.btn {
    width: 35%;
}

.flex-line {
    justify-content: space-between;
}

.text-field {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
}

.text-field__label {
    color: #212529;
    display: block;
    margin-bottom: 0.25rem;
}

.text-field__input {
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #999;
    border-radius: 0.25rem;
    transition:
        border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;

    &::placeholder {
        color: #212529;
        opacity: 0.4;
    }

    &:focus {
        color: #212529;
        background-color: #f3f0f0;
        border-color: w;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
    }
}

.title {
    font-size: 20px;
    font-weight: 600;
    line-height: 24.2px;
    color: green;
}

.cross {
    width: 30px;
    height: 30px;
    color: #b3b3b3;
    cursor: pointer;

    &:hover {
        color: #202020;
    }
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 725px;
  padding: 40px 128px;
  font: 400 1rem Inter;
  gap: 10px;
  border-radius: 25px;
  background: linear-gradient(
    213.61deg,
    #a1c2ff 3.13%,
    #75a3fb 46.43%,
    #4781ee 92.74%
  );
}
</style>