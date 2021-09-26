import React from 'react';
import { DatePicker } from 'antd';
import styles from './index.less';

const QuarterPicker = () => {
  const onChange = (date: any, dateString: any) => {
    console.log(date, dateString);
  };
  return (
    <div>
      <DatePicker
        onChange={onChange}
        picker="quarter"
        className={styles.quarterPickerBox}
        dropdownClassName={styles.quarterPicker}
      />
    </div>
  );
};

export default QuarterPicker;
