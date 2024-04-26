import React, { useEffect, useState } from 'react';

const Temperatura = () => {
  const [temp, setTemp] = useState(15);
  const [backgroundColor, setBackgroundColor] = useState('blue');
  const [time, setTime] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      setTime(`${hours} : ${minutes} : ${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const dates = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      setData(`${dates}.${month}.${year}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const plus = () => {
    setTemp(temp + 5);
    if (temp + 5 >= 25) {
      setBackgroundColor('orange');
    }
  };
  
  const minus = () => {
    setTemp(temp - 5);
    if (temp - 5 <= 10) {
      setBackgroundColor('red');
    }
  };

  return (
    <div className="container">
      <div className="vaqt">
        {time}
        <div className="sana">{data}</div>
      </div>
      <div className="ovol" style={{ backgroundColor: backgroundColor }}>
        {temp + 'C'}
      </div>

      <section className="switch">
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </section>
    </div>
  );
};

export default Temperatura;
