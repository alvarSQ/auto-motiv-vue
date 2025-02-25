<script setup lang="ts">
import { ref } from 'vue';
import LogoSVG from '@/components/logoSVG.vue';
import InputPassword from './inputPassword.vue';
import { useAuthStore } from '../stores/auth';
import { storeToRefs } from 'pinia';

const { userInput, userInfo, dropdownItems } = storeToRefs(useAuthStore());

const authStore = useAuthStore();

const isDropdownVisibleTable = ref(false);
const isDropdownVisibleLogin = ref(false);
const rememberAccount = ref(false);

const userInputAuth = async () => {  
  await authStore.authUser('');
  if (userInfo.value.login && rememberAccount.value) {
    dropdownItems.value.tabel.push(userInfo.value.tabel)
    dropdownItems.value.login.push(userInfo.value.login)
  }
};

const hideDropdown = () => {
  isDropdownVisibleTable.value = false;
  isDropdownVisibleLogin.value = false;
};

const selectItem = (type: string, item: string) => {
  type === 'table'
    ? (userInput.value.user.tabel = item)
    : (userInput.value.user.login = item);
  hideDropdown();
};
</script>

<template>
  <LogoSVG />
  <div class="container">
    <div class="title">Вход в ERP-систему</div>
    <form class="text-field" @submit.prevent="userInputAuth">
      <div class="input-wrapper">
        <label class="text-field__label" for="table">Табельный номер</label>

        <input
          class="text-field__input"
          type="text"
          name="table"
          id="table"
          placeholder="Введите табельный номер"
          autocomplete="off"
          v-model="userInput.user.tabel"
          @focus="isDropdownVisibleTable = true"
          @blur="hideDropdown"
        />

        <ul class="dropdown" v-if="isDropdownVisibleTable && dropdownItems.tabel[0]">
          <li
            v-for="(item, index) in dropdownItems.tabel"
            :key="index"
            @mousedown="selectItem('table', item)"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="input-wrapper">
        <label class="text-field__label" for="login">Логин</label>

        <input
          class="text-field__input"
          type="text"
          name="login"
          id="login"
          autocomplete="off"
          placeholder="Введите логин"
          v-model="userInput.user.login"
          @focus="isDropdownVisibleLogin = true"
          @blur="hideDropdown"
        />

        <ul class="dropdown" v-if="isDropdownVisibleLogin && dropdownItems.login[0]">
          <li
            v-for="(item, index) in dropdownItems.login"
            :key="index"
            @mousedown="selectItem('logo', item)"
          >
            {{ item }}
          </li>
        </ul>
      </div>

     <InputPassword />

      <div class="checkbox-wrapper">
        <input class="text-field__checkbox" type="checkbox" id="checkbox" v-model="rememberAccount" />
        <label class="text-field__label__checkbox" for="checkbox">
          <span class="custom-checkbox"></span>
          Запомнить аккаунт
        </label>
      </div>
      <button class="btn">Войти</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.logo-svg {
  position: absolute;
  top: 45px;
  right: 50px;
}

.input-wrapper {
  position: relative;
}

.dropdown {
  position: absolute;
  top: 105%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 16px 15px;
  font-size: 14px;
  border: 1px solid rgba(156, 190, 255, 1);
  border-radius: 5px;
  background: #fff;
  z-index: 10;

  li {
    padding: 6px 5px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: rgba(242, 247, 255, 1);
    }

    &:active {
      background-color: rgba(236, 243, 255, 1);
    }
  }
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(360px, 90%, 460px);
  font: 400 1rem Inter;
}

.title {
  margin-bottom: 42px;
  font-size: 30px;
  line-height: 36.31px;
  color: #000;
}


.checkbox-wrapper {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.text-field__checkbox {
  display: none;

  &:checked + .text-field__label__checkbox .custom-checkbox {
    background: rgba(119, 166, 255, 1);
    border-color: rgba(119, 166, 255, 1);

    &::after {
      content: '';
      position: absolute;
      left: 7px;
      top: 1px;
      width: 6px;
      height: 15px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
}

.text-field__label__checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: rgba(166, 163, 173, 1);
  font-size: 18px;

  &:hover .custom-checkbox {
    border-color: rgba(107, 152, 236, 1);
  }
}

.custom-checkbox {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: #fff;
  border: 2px solid rgba(119, 166, 255, 1);
  border-radius: 4px;
  margin-right: 17px;
  position: relative;
  transition: all 0.2s ease-in-out;
}


</style>
