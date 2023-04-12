export type CommandProps = {
  cmd: string;
  output: string;
  href?: string;
};

export type CommandObjKeys =
  | 'welcome'
  | 'help'
  | 'whois'
  | 'social'
  | 'projects'
  | 'notfound';

export type CommandObjProps = Record<CommandObjKeys, CommandProps[]>;

export const COMMANDS: CommandObjProps = {
  welcome: [
    {
      cmd: ' ',
      output:
        'Welcome to my interactive web terminal. For a list of commands, type "help". Please note, this site is under construction',
      href: '',
    },
  ],
  help: [
    { cmd: 'whois', output: 'Who is Matt?' },
    { cmd: 'social', output: 'View social networks' },
    { cmd: 'projects', output: 'View coding projects' },
    { cmd: 'email', output: 'View email address' },
  ],
  whois: [
    {
      cmd: 'whois',
      output:
        "Hi, I'm Matt! 👋. I'm a Frontend developer with a passion for coding and problem-solving. I've been creating websites for many years as a hobby, which has now become my full-time job. I have experience in a production environment, working on public facing products for Statespace, using React, TypeScript, styled-component, Storyboook and Apollo.",
    },
  ],
  social: [
    {
      cmd: 'linkedin',
      output: 'linkedin/matthewmcgeown',
      href: 'https://www.linkedin.com/in/matthew-mcgeown-964860a7/',
    },
  ],
  projects: [
    { cmd: 'portfolio', output: "You're looking at it, pretty cool right?" },
  ],
  notfound: [
    {
      cmd: '404',
      output: "Command not found... For a list of commands type 'help'",
    },
  ],
};

// todo: Add banner
//     __  ___      __  __     __  ___     ______
//    /  |/  /___ _/ /_/ /_   /  |/  /____/ ____/__  ____ _      ______
//   / /|_/ / __ `/ __/ __/  / /|_/ / ___/ / __/ _ \/ __ \ | /| / / __ \
//  / /  / / /_/ / /_/ /_   / /  / / /__/ /_/ /  __/ /_/ / |/ |/ / / / /
// /_/  /_/\__,_/\__/\__/  /_/  /_/\___/\____/\___/\____/|__/|__/_/ /_/
