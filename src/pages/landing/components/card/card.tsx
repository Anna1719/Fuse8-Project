import React from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';

type TCardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  content: string;
};

export const Card: React.FC<TCardProps> = ({ title, content, ...rest }) => {
  return (
    <article {...rest} className={classNames(styles.card, rest.className)}>
      <h4>{title}</h4>
      <p>{content}</p>
      {rest.children}
    </article>
  );
};
