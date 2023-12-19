import { forwardRef } from 'react'
import './styles.css'

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref): JSX.Element => (
    <div>
      <input
        className={`default_base_password_input ${className ?? ''}`}
        type="password"
        ref={ref}
        {...props}
      />
      {!!props.error && <span className="default_base_password_input_error">{props.error}</span>}
    </div>
  )
)
