import { FC, useEffect, useState } from 'react';

export const Commander: FC<any> = ({ commands }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [history, setHistory] = useState<string[]>(['']);
  const [arrId, setArrId] = useState(0);

  useEffect(() => {
    setArrId(0);
  }, [commands]);

  useEffect(() => {
    if (arrId >= commands.length) {
      setText1('');
      setText2('');
      return;
    }

    const string1 = () => {
      if (text1 !== commands[arrId].cmd) {
        setText1((prev) => prev + commands[arrId].cmd.charAt(prev.length));
      } else if (text2 !== commands[arrId].output) {
        setText2((prev) => prev + commands[arrId].output.charAt(prev.length));
      } else if (text2 === commands[arrId].output) {
        setHistory((prev) => [...prev, `${text1} ${text2}`]);
        setText1('');
        setText2('');
        setArrId((prev) => prev + 1);
      }
    };

    const int1 = setInterval(string1, 10);

    return () => {
      clearInterval(int1);
    };
  }, [commands, text1, text2, arrId, history]);

  return (
    <div>
      <>
        <p>
          {history &&
            history.map((item, idx) => {
              return item ? (
                <span key={idx}>
                  {item}
                  <br />
                </span>
              ) : (
                ''
              );
            })}
        </p>
        {text1 && (
          <p>
            <span>{text1} </span>
            <span>{text2}</span>
          </p>
        )}
      </>
    </div>
  );
};

export default Commander;
