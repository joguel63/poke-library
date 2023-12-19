import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button, Card } from 'core/components'
import { genericValidations } from 'core/validations'
import { savedUsers } from 'core/utils/users'

import { EmailInput, PasswordInput } from 'modules/auth/components'

import './styles.css'

const schema = z.object({
  email: genericValidations.email,
  password: genericValidations.password,
})

type LoginFormData = {
  email: string
  password: string
}

export const Login = () => {
  const { register, handleSubmit, formState } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
  })
  const navigate = useNavigate()

  const onSubmit = handleSubmit(({ email, password }) => {
    if (savedUsers.find((user) => user.email === email && user.password === password)) {
      navigate('/library')
    } else {
      alert('Usuario o contraseña incorrectos')
    }
  })
  return (
    <div className="login_page_container">
      <Card>
        <form onSubmit={onSubmit}>
          <div className="login_page_form_container">
            <h2 className="login_page_form_title">Inicia sesión para acceder</h2>

            <EmailInput
              {...register('email')}
              placeholder="Ingresa tu correo"
              error={formState.errors.email?.message}
            />
            <PasswordInput
              {...register('password')}
              placeholder="Ingresa tu contraseña"
              error={formState.errors.password?.message}
            />
            <Button type="submit">Enviar</Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
