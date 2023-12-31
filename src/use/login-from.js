import { computed , watch } from 'vue'
import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export function useLoginForm() {
    const store = useStore()
        const PASSWORD_MIN = 6
        const router = useRouter()
        const { handleSubmit, isSubmitting, submitCount} = useForm();
        const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
          "email",
          yup
            .string()
            .trim()
            .required("Пожалуйста введите емайл")
            .email("Необходимо ввести корректный емайл")
        );
        const {
          value: password,
          errorMessage: pError,
          handleBlur: pBlur,
        } = useField(
          "password",
          yup
            .string()
            .trim()
            .required("Пожалуйств введите пароль")
            .min(PASSWORD_MIN, 
            `Пароль не может быть меньше ${PASSWORD_MIN} символов`)
        );
        const isTooManyAttempts = computed(() => submitCount.value >= 3)
        const onSubmit = handleSubmit( async (values) => {
          console.log("From", values);
          try {
            await store.dispatch('authModule/login', values)
            router.push('/')
          }
          catch(e) {

          }
        
        });
        watch(isTooManyAttempts, val => {
          if(val){
            setTimeout(() => submitCount.value = 0, 1500);
          }
        })
        return {
          email,
          password,
          eError,
          eBlur,
          password,
          pError,
          pBlur,
          onSubmit,
          isSubmitting,
          isTooManyAttempts
        };

}