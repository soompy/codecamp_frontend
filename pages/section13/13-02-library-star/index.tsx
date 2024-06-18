import React, { useState } from 'react';
import { Rate } from 'antd';

// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export default function App(): JSX.Element {
  const [value, setValue] = useState(3);

//   === 1단계 방식 ===
//   const onChangeStar = (value: number): void => {
//     setValue(value);
//   }

//   === 2단계 방식 ===
    const onChangeStar = (value) => setValue(value);

  return (
    // <Rate onChange={onChangeStar} value={value} /> // 1단계 방식
    <Rate onChange={onChangeStar} value={value} /> // 2단계 방식
    //   return <Rate onChange={setValue} value={value} />;
  )
};