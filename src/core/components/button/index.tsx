import './styles.css'
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`default_base_button ${className ?? ''}`} {...props}>
      {children}
    </button>
  )
}
