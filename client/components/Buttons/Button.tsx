import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'danger' | 'secondary' | 'fancy' | 'ghost' | 'outline'
  size?: 'xss' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  onClick?: () => void
  loading?: boolean
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'primary',
  size = 'md',
  onClick,
  loading = false,
  children,
}) => {
  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 text-white hover:bg-blue-600'
      case 'danger':
        return 'bg-red-500 text-white hover:bg-red-600'
      case 'secondary':
        return 'bg-gray-500 text-white hover:bg-gray-600'
      case 'fancy':
        return 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white'
      case 'ghost':
        return 'bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-100'
      case 'outline':
        return 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50'
      default:
        return ''
    }
  }

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'xss':
        return 'text-xs px-1 py-0.5'
      case 'xs':
        return 'text-xs px-2 py-1'
      case 'sm':
        return 'text-sm px-3 py-1.5'
      case 'md':
        return 'text-base px-4 py-2'
      case 'lg':
        return 'text-lg px-5 py-2.5'
      case 'xl':
        return 'text-xl px-6 py-3'
      default:
        return ''
    }
  }

  const baseClasses = 'rounded focus:outline-none inline-flex items-center justify-center'

  const variantClasses = getVariantClasses(variant)
  const sizeClasses = getSizeClasses(size)

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
      onClick={loading ? undefined : onClick}
      disabled={loading}
    >
      {loading && <FontAwesomeIcon icon={faArrowsRotate} className={`animate-spin mr-2 h-3 w-3 ${variantClasses}`} />}
      {children}
    </button>
  )
}

export default Button
