import PropsTypes from "prop-types";
import "./Button.scss";
const variantsClassNames = {
  primary: "Button-Component_primary",
  secondary: "Button-Component_secondary",
}

export default function Button({ children, className, onClick, variant, as, ...htmlProps }) {
  const Component = as || 'button';
  return (
    <Component {...htmlProps} className={`Button-Component ${variantsClassNames[variant || 'primary']} ${className || ''}`} onClick={onClick}>
        {children}
    </Component>
  )
}

Button.propTypes = {
  children: PropsTypes.node,
  className: PropsTypes.string,
  onClick: PropsTypes.func,
  variant: PropsTypes.oneOf(["primary", "secondary"]),
  as: PropsTypes.oneOf(["button", "a"]),
}