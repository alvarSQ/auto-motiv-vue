import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';
import axios, { AxiosError } from 'axios';

const URL = 'http://localhost:10000';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const isLoading = ref(false);

    const userInfo = ref({} as IUserInfo);

    const token = ref('');

    const userInput = reactive<ILoginUser>({
      user: {
        login: '',
        tabel: '',
        password: '',
      },
    });

    // Данные для dropdown
    const dropdownItems = ref<IDropdownItems[]>([]);

    const authUser = async (type?: string) => {
      isLoading.value = true;
      try {
        const response = await axios.post(`${URL}/users/${type}`, {
          ...userInput,
        });
        if (response.data) {
          token.value = (response.data as IRespUserInfo).user.token;
          userInfo.value = (response.data as IRespUserInfo).user;
          type
            ? console.log(
                `${userInput.user.login}, поздравляю с успешным входом в систему!`
              )
            : console.log(`${userInput.user.login}, вы зарегистрированы!`);
          userInput.user = {
            login: '',
            tabel: '',
            password: '',
          };
        }
      } catch (err) {
        token.value = '';
        userInfo.value = {} as IUserInfo;
        console.log((err as AxiosError).response?.data);
      } finally {
        isLoading.value = false;        
      }
    };

    return { userInfo, isLoading, token, userInput, dropdownItems, authUser };
  },
  {
    persist: {
      pick: ['token', 'dropdownItems'],
    },
  }
);
