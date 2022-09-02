import React, {FC, ReactNode} from 'react';
import styles from "./HamburgerMenu.module.scss";

export interface IHamburgerMenuProps {
  children: ReactNode;
  right?: number;
}

const HamburgerMenu: FC<IHamburgerMenuProps> = ({ children, right = 424 }) => {
  return (
    <div className={styles.menu}>
      <div className={styles['menu-overlay']} style={{right: `${right}px`}} />
      {children}
    </div>
  );
};

export default HamburgerMenu;
