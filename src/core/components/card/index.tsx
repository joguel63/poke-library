import React from 'react'
import './styles.css'

type CardProps = React.HTMLAttributes<HTMLDivElement>

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div className={`default_base_card ${className ?? ''}`} {...props}>
      {children}
    </div>
  )
}
