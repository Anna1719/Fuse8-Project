import React from 'react';
import cn from 'classnames';
import styles from './button-with-icon.module.scss';

type TButtonWithIconProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
};

export const ButtonWithIcon = ({ icon, ...rest }: TButtonWithIconProps) => {
  return (
    <button {...rest} className={cn(styles.buttonWithIcon, rest.className)}>
      {rest.children}
      {icon}
    </button>
  );
};
