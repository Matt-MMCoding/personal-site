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
  help: [
    { cmd: 'whois', output: 'Who is Matt?' },
    { cmd: 'whoami', output: 'Who are you?' },
    { cmd: 'social', output: 'View social networks' },
    { cmd: 'projects', output: 'View coding projects' },
    { cmd: 'email', output: 'View email address' },
    { cmd: 'clear', output: 'Clear terminal' },
  ],
};
