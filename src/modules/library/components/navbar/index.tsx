import './styles.css'
type NavbarProps = React.HTMLAttributes<HTMLDivElement>

export const Navbar: React.FC<NavbarProps> = ({ className, ...rest }) => (
  <div className={`base_navbar ${className ?? ''}`} {...rest} />
)
