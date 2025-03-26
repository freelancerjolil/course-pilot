import PropTypes from 'prop-types';

const Button = ({ variant, size, onClick, children }) => {
  // Base button styles
  const baseStyles =
    'rounded-md font-semibold transition-all duration-300 focus:outline-none';

  // Size styles
  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-md',
    large: 'px-8 py-4 text-lg',
  };

  // Color variant styles
  const colorStyles = {
    primary: 'bg-teal-500 text-white hover:bg-teal-600',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    outline:
      'bg-transparent text-teal-500 border-2 border-teal-500 hover:bg-teal-100',
  };

  // Dynamic class names based on props
  const variantClass = colorStyles[variant] || colorStyles.primary;
  const sizeClass = size ? sizeStyles[size] : sizeStyles.medium;

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeClass} ${variantClass}`}
    >
      {children}
    </button>
  );
};

// Prop validation
Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

// Default props
Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  onClick: () => {},
};

export default Button;
