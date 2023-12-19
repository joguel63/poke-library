import { forwardRef } from 'react'
import './styles.css'

type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement>

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, ...props }, ref): JSX.Element => (
    <div>
      <input className={`default_base_search_input ${className ?? ''}`} ref={ref} {...props} />
    </div>
  )
)
