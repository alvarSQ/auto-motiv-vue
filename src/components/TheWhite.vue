<script setup lang="ts">
import { ref } from 'vue';
import LogoSVG from '@/components/logoSVG.vue';

const isPasswordVisible = ref(false);

const isDropdownVisibleTable = ref(false);
const isDropdownVisibleLogo = ref(false);

const selectedValueTable = ref('');
const selectedValueLogin = ref('');

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const hideDropdown = () => {
  isDropdownVisibleTable.value = false;
  isDropdownVisibleLogo.value = false;
};

const selectItem = (type: string, item: string) => {
  type === 'table'
    ? (selectedValueTable.value = item)
    : (selectedValueLogin.value = item);
  hideDropdown();
};

// Пример данных для dropdown
const dropdownItemsTable = ref(['001', '002', '003']);
const dropdownItemsLogo = ref(['Иванов И.Т.', 'Петров П.П.', 'Сидоров С.С.']);
</script>

<template>
  <LogoSVG />
  <div class="container">
    <div class="title">Вход в ERP-систему</div>
    <form class="text-field" @submit.prevent="">
      <div class="input-wrapper">
        <label class="text-field__label" for="table">Табельный номер</label>

        <input
          class="text-field__input"
          type="text"
          name="table"
          id="table"
          placeholder="Введите табельный номер"
          autocomplete="off"
          v-model="selectedValueTable"
          @focus="isDropdownVisibleTable = true"
          @blur="hideDropdown"
        />

        <ul class="dropdown" v-if="isDropdownVisibleTable">
          <li
            v-for="(item, index) in dropdownItemsTable"
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
          v-model="selectedValueLogin"
          @focus="isDropdownVisibleLogo = true"
          @blur="hideDropdown"
        />

        <ul class="dropdown" v-if="isDropdownVisibleLogo">
          <li
            v-for="(item, index) in dropdownItemsLogo"
            :key="index"
            @mousedown="selectItem('logo', item)"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div>
        <div class="flex-line">
          <label class="text-field__label" for="password">Пароль</label>
          <div @click="togglePasswordVisibility">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="!isPasswordVisible"
            >
              <path
                d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003M9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003"
                stroke="#757D8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 2.5L21.5 21.5"
                stroke="#757D8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-else
            >
              <path
                d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                stroke="#757D8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="#757D8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <input
          class="text-field__input"
          :type="isPasswordVisible ? 'text' : 'password'"
          name="password"
          id="password"
          placeholder="Введите пароль"
          autocomplete="off"
        />
      </div>

      <div class="checkbox-wrapper">
        <input class="text-field__checkbox" type="checkbox" id="checkbox" />
        <label class="text-field__label__checkbox" for="checkbox">
          <span class="custom-checkbox"></span>
          Запомнить аккаунт
        </label>
      </div>
      <button class="btn">Вход</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
$primary-color: rgba(119, 166, 255, 1);
$primary-hover: rgba(107, 152, 236, 1);
$primary-active: rgba(84, 140, 246, 1);
$gray-text: rgba(117, 125, 138, 1);
$gray-label: rgba(102, 102, 102, 1);
$border-color: rgba(213, 213, 214, 1);
$focus-border: rgba(156, 190, 255, 1);
$transition: all 0.2s ease-in-out;

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
  border: 1px solid $focus-border;
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

.text-field {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  &__label {
    color: $gray-label;
    display: block;
    margin-bottom: 10px;
  }

  &__input {
    width: 100%;
    height: 56px;
    padding: 0.375rem 0.75rem;
    font: inherit;
    color: #212529;
    background: #fff;
    border: 1px solid $border-color;
    border-radius: 12px;
    transition: border-color 0.15s ease-in-out;

    &::placeholder {
      color: #212529;
      opacity: 0.4;
    }

    &:focus {
      border-color: $focus-border;
    }
  }
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.text-field__checkbox {
  display: none;

  &:checked + .text-field__label__checkbox .custom-checkbox {
    background: $primary-color;
    border-color: $primary-color;

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
    border-color: $primary-hover;
  }
}

.custom-checkbox {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: #fff;
  border: 2px solid $primary-color;
  border-radius: 4px;
  margin-right: 17px;
  position: relative;
  transition: $transition;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  font-size: 20px;
  color: $gray-text;
  background: rgba(245, 245, 245, 1);
  border-radius: 10px;
  cursor: pointer;
  transition: $transition;

  &:hover {
    color: #fff;
    background: $primary-color;
  }

  &:active {
    background: $primary-active;
  }
}
</style>
