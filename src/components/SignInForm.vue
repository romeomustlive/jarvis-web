<script setup lang="ts">
import { toFormValidator } from '@vee-validate/zod'
import { z } from 'zod'

interface SignInForm {
  email: string
  password: string
}

interface Props {
  isLoading: boolean
}

defineProps<Props>()

const { t } = useI18n()

const validationSchema = toFormValidator(
  z.object({
    email: z
      .string()
      .email({ message: 'Must be a valid email' })
      .nonempty('This is required'),
    password: z
      .string()
      .min(8, { message: 'Too short' })
      .nonempty('This is required'),
  })
)

const { meta, errors, handleSubmit } = useForm<SignInForm>({
  initialValues: {
    email: '',
    password: '',
  },
  validationSchema,
})

const { value: email } = useField<string>('email')
const { value: password } = useField<string>('password')

const onSubmitForm = handleSubmit((values) => {
  alert(JSON.stringify(values))
})
</script>

<template>
  <Card class="w-20rem">
    <template #title>
      <h5>{{ t('sign_in') }}</h5>
    </template>

    <template #content>
      <form @submit.prevent="onSubmitForm">
        <div class="field">
          <label for="email">{{ t('email') }}</label>
          <InputText
            v-model="email"
            name="email"
            :class="{ 'p-invalid': errors.email && meta.touched }"
          />
          <small v-if="errors.email && meta.touched" class="p-error">
            {{ errors.email }}
          </small>
        </div>

        <div class="field">
          <label for="password">{{ t('password') }}</label>
          <Password
            v-model="password"
            name="password"
            :feedback="false"
            :class="{ 'p-invalid': errors.password && meta.touched }"
          />
          <small v-if="errors.password && meta.touched" class="p-error">
            {{ errors.password }}
          </small>
        </div>

        <Button type="submit" :loading="isLoading">
          {{ t('sign_in') }}
        </Button>
      </form>
    </template>
  </Card>
</template>

<i18n>
en:
  sign_in: Sign In
  email: Email
  password: Password
  login: Login 
  
ru:
  sign_in: Вход
  email: Электронная почта
  password: Пароль
  login: Войти  
</i18n>
