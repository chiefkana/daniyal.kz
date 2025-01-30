const id = "terminal-development.md";
						const collection = "blog";
						const slug = "how-do-i-develop-my-terminal-portfolio-website-with-react";
						const body = "\n> This article is originally from my [blog post](https://satnaing.dev/blog/posts/how-do-i-develop-my-terminal-portfolio-website-with-react). I put this article to demonstrate how you can write blog posts/articles using AstroPaper theme.\n\nDeveloping a terminal-like website using ReactJS, TypeScript and Styled-Components. Includes features like autocomplete, multiple themes, command hints etc.\n\n![Sat Naing's Terminal Portfolio](https://satnaing.dev/_ipx/w_2048,q_75/https%3A%2F%2Fres.cloudinary.com%2Fnoezectz%2Fimage%2Fupload%2Fv1654754125%2FSatNaing%2Fterminal-screenshot_gu3kkc.png?url=https%3A%2F%2Fres.cloudinary.com%2Fnoezectz%2Fimage%2Fupload%2Fv1654754125%2FSatNaing%2Fterminal-screenshot_gu3kkc.png&w=2048&q=75)\n\n## Table of contents\n\n## Intro\n\nRecently, I've developed and published my portfolio + a blog. I’m glad I got some good feedback for it. Today, I want to introduce my new terminal-like portfolio website. It is developed using ReactJS, TypeScript. I got this idea from CodePen and YouTube.\n\n## Tech Stack\n\nThis project is a frontend project without any backend codes. The UI/UX part is designed in Figma. For the frontend user-interface, I chose React over pain JavaScript and NextJS. Why?\n\n- Firstly, I want to write declarative code. Managing HTML DOM using JavaScript imperatively is really tedious.\n- Secondly, because it is React!!! It is fast, and reliable.\n- Lastly, I don’t need much of the SEO features, routing and image optimization provided by NextJS.\n\nAnd of course there's TypeScript for type checking.\n\nFor styling, I took a different approach than what I usually do. Instead of choosing Pure CSS, Sass, or Utility CSS Framework like TailwindCSS, I chose the CSS-in-JS way (Styled-Components). Although I’ve known about Styled-Components for some time, I’ve never tried it out. So, the writing style and structures of Styled-Components in this project may not be very organized or very good.\n\nThis project doesn’t need very complex state management. I just use ContextAPI in this project for multiple theming and to avoid prop drilling.\n\nHere’s a quick recap for the tech stack.\n\n- Frontend: [ReactJS](https://reactjs.org/ \"React Website\"), [TypeScript](https://www.typescriptlang.org/ \"TypeScript Website\")\n- Styling: [Styled-Components](https://styled-components.com/ \"Styled-Components Website\")\n- UI/UX: [Figma](https://figma.com/ \"Figma Website\")\n- State Management: [ContextAPI](https://reactjs.org/docs/context.html \"React ContextAPI\")\n- Deployment: [Netlify](https://www.netlify.com/ \"Netlify Website\")\n\n## Features\n\nHere are some features of the project.\n\n### Multiple Themes\n\nUsers can change multiple themes. At the time of writing this post, there are 5 themes; and more themes will probably be added in the future. The selected theme is saved in local storage so that the theme won’t change on page refresh.\n\n![Setting different theme](https://i.ibb.co/fSTCnWB/terminal-portfolio-multiple-themes.gif)\n\n### Command-line Completion\n\nTo look and feel as close to the actual terminal as possible, I put a command-line completion feature which auto fills in partially typed commands by simply pressing ‘Tab’ or ‘Ctrl + i’.\n\n![Demonstrating command-line completion](https://i.ibb.co/CQTGGLF/terminal-autocomplete.gif)\n\n### Previous Commands\n\nUsers can go back to the previous commands or navigate the previously typed commands by pressing Up & Down Arrows.\n\n![Going back to previous commands with UP Arrow](https://i.ibb.co/vD1pSRv/terminal-up-down.gif)\n\n### View/Clear Command History\n\npreviously typed commands can be viewed by typing ‘history’ in the command line. All the command history and terminal screen can be wiped out by typing ‘clear’ or pressing ‘Ctrl + l’.\n\n![Clearing the terminal with 'clear' or 'Ctrl + L' command](https://i.ibb.co/SJBy8Rr/terminal-clear.gif)\n\n## Outro\n\nThis is a really fun project, and one special part of this project is I had to focus on logic rather than user-interface (even though this is kind of a frontend project).\n\n## Project Links\n\n- Website: [https://terminal.satnaing.dev/](https://terminal.satnaing.dev/ \"https://terminal.satnaing.dev/\")\n- Repo: [https://github.com/satnaing/terminal-portfolio](https://github.com/satnaing/terminal-portfolio \"https://github.com/satnaing/terminal-portfolio\")\n";
						const data = {author:"Sat Naing",pubDatetime:new Date(1654746171000),title:"How Do I Develop My Terminal Portfolio Website with React",featured:false,draft:false,tags:["JavaScript","ReactJS","ContextAPI","Styled-Components","TypeScript"],description:"EXAMPLE POST: Developing a terminal-like website using ReactJS, TypeScript and Styled-Components. Includes features like autocomplete, multiple themes, command hints etc."};
						const _internal = {
							type: 'content',
							filePath: "/Users/kanatbektursyn/Documents/pet/daniyal.kz/astro/src/content/blog/terminal-development.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
