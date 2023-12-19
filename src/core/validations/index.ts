import * as z from 'zod'

export const genericValidations = {
  email: z
    .string()
    .min(1, { message: 'Por favor, ingrese un correo electrónico' })
    .email({ message: 'Por favor, ingrese un correo electrónico válido' })
    .trim(),

  password: z.string().min(8, { message: 'Por favor, ingrese una contraseña valida' }),
}
