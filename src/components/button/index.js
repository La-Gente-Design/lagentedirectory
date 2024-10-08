import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import * as styles from "./index.module.scss";

const Button = ({
  children,
  type,
  href,
  to,
  onClick,
  width,
  size,
  disabled,
  style,
  target,
  rel,
}) => {
  const buttonStyles = classnames({
    [styles.main]: true,
    [styles.mainWidthFull]: width === "full",
    [styles.mainWidthAuto]: width === "auto",
  });
  const childStyles = classnames({
    [styles.children]: true,
    [styles.childrenSizeRegular]: size === "regular",
  });

  let El;

  if (href) {
    El = "a";
  } else if (to) {
    El = Link;
  } else {
    El = "button";
  }

  return (
    <El
      className={buttonStyles}
      type={type}
      href={href}
      to={to}
      onClick={onClick}
      disabled={disabled}
      style={style}
      target={target}
      rel={rel}
    >
      <span className={childStyles}>{children}</span>
    </El>
  );
};

Button.defaultProps = {
  width: "full",
  size: "regular",
};

export default Button;
