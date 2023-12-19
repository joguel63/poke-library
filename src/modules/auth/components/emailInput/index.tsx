import { forwardRef } from 'react'
import './styles.css'

type EmailInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  ({ className, ...props }, ref): JSX.Element => (
    <div>
      <input className={`default_base_email_input ${className ?? ''}`} ref={ref} {...props} />
      {props.error && <span className="default_base_email_input_error">{props.error}</span>}
    </div>
  )
)
