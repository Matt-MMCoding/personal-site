import { SetStateAction } from 'react';

export type CommandProps = {
  [key: string]: string | SetStateAction<string | CommandProps[]>;
};

export const COMMANDS: CommandProps = {
  whois: [{ cmd: 'whois', output: "Hi! I'm Matt" }],
  whoami: [
    {
      cmd: 'whoami',
      output: 'Maybe my next employeer? Maybe a lurker... Who knows?',
    },
  ],
};
