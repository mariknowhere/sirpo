import React, {FC} from 'react';
import styles from './AssemblyBegin.module.scss';

interface IAssemblyBeginProps {
  text: string;
}

const AssemblyBegin: FC<IAssemblyBeginProps> = ({ text }) => {
  return (
    <div className={styles.modal}>
      <div className={styles['modal-content']}>
        <span className={styles['modal-content-text']}>{text}</span>
        <div className={styles['modal-content-range']}>
          <img src="images/range.svg" alt="range" />
        </div>
      </div>
    </div>
  );
};

export default AssemblyBegin;
