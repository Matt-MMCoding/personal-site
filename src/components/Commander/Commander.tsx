import { FC, useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';
import Container from '../UI/Container/Container';
import parse, {
  HTMLReactParserOptions,
  attributesToProps,
  Element,
  domToReact,
} from 'html-react-parser';
import Link from 'next/link';
import Typography from '../UI/Container/Typography/Typography';
import { CommandProps } from '@/constants/Commands';
import { ICommanderProps } from './types';

export const Commander: FC<ICommanderProps> = ({ commands }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [history, setHistory] = useState<CommandProps[]>([]);
  const [arrId, setArrId] = useState(0);

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      const typedDomNode = domNode as Element;
      const { attribs, children } = typedDomNode;

      if (children && attribs) {
        const { ...props } = attributesToProps(attribs);

        if (props.href !== undefined) {
          return (
            <Link
              href={props.href}
              target="_blank"
              className={styles.history}
              {...props}
            >
              <Typography color="#ffc0cb">{domToReact(children)}</Typography>
            </Link>
          );
        } else {
          return (
            <Typography color="#c0f401">{domToReact(children)}</Typography>
          );
        }
      }

      return false;
    },
  };

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
        setHistory((prev) => [
          ...prev,
          {
            cmd: text1,
            output: text2,
            ...(commands[arrId].href && { href: commands[arrId].href }),
          },
        ]);
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
    <Container flexDirection="column">
      {history &&
        history.map((item, idx) => {
          return (
            <Container key={idx}>
              <Typography color="#c0f401">{item.cmd}&nbsp;</Typography>
              {parse(
                `<span key={idx}${
                  item.href ? ` href="${item.href}"` : ''
                }>${item.output.replaceAll('\n', '<br/>')}</span>`,
                options
              )}
            </Container>
          );
        })}
      {text1 && (
        <Container>
          <Typography color="#c0f401">{text1}&nbsp;</Typography>
          <Typography color="#ffc0cb">{parse(`${text2}`, options)}</Typography>
        </Container>
      )}
    </Container>
  );
};

export default Commander;
