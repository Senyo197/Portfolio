import React from "react";

export default function Stacks() {
  const ProgrammingLanguages = [
    {
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "C",
      link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    {
      name: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    },
    { name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Python", link: "https://www.python.org/" },
    { name: "MySQL", link: "https://www.mysql.com/" },
    { name: "Bash", link: "https://www.gnu.org/software/bash/" },
  ];

  const frameworks = [
    { name: "React.js", link: "https://reactjs.org/" },
    { name: "React-scroll", link: "https://github.com/fisshy/react-scroll" },
    { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
    { name: "Bootstrap", link: "https://getbootstrap.com/" },
    { name: "Material UI", link: "https://material-ui.com/" },
    { name: "Styled Component", link: "https://styled-components.com/" },
    { name: "Vite", link: "https://vitejs.dev/" },
  ];

  const devops = [
    { name: "Git", link: "https://git-scm.com/" },
    { name: "Docker", link: "https://www.docker.com/" },
    { name: "Linux", link: "https://www.linux.org/" },
    {
      name: "Shell scripting (Bash)",
      link: "https://www.gnu.org/software/bash/",
    },
    { name: "Ruby", link: "https://www.ruby-lang.org/" },
    { name: "Vagrant", link: "https://www.vagrantup.com/" },
    { name: "Slack", link: "https://slack.com/" },
    {
      name: "Microsoft Teams",
      link: "https://www.microsoft.com/en-us/microsoft-teams/",
    },
  ];

  const softwares = [
    { name: "VS Code", link: "https://code.visualstudio.com/" },
    { name: "Github", link: "https://github.com/" },
    { name: "Discord", link: "https://discord.com/" },
    { name: "Vercel", link: "https://vercel.com/" },
    { name: "Netlify", link: "https://www.netlify.com/" },
    { name: "Google Chrome", link: "https://www.google.com/chrome/" },
    { name: "Wordpress", link: "https://wordpress.org/" },
  ];

  return (
    <div>
      <div className="text-blue-600 text-3xl font-bold mb-2">Bits & Tools</div>
      <div className="mb-8">The toolkits that drive my coding reality!</div>
      <ul>
        <ul className="list-none">
          <div className="text-blue-600 font-bold text-xl mb-2">
            Programming Languages
          </div>
          {ProgrammingLanguages.map((language) => (
            <li key={language.name} className="flex items-center mb-2">
              <span className="mr-2 text-blue-600">✓</span>
              <a
                href={language.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                {language.name}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <div className="text-blue-600 font-bold text-xl mb-2 mt-8">
            Framework & Libraries
          </div>
          {frameworks.map((framework) => (
            <li key={framework.name} className="flex items-center mb-2">
              <span className="mr-2 text-blue-600">✓</span>
              <a
                href={framework.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                {framework.name}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <div className="text-blue-600 font-bold text-xl mb-2 mt-8">
            DevOps
          </div>
          {devops.map((devop) => (
            <li key={devop.name} className="flex items-center mb-2">
              <span className="mr-2 text-blue-600">✓</span>
              <a
                href={devop.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                {devop.name}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <div className="text-blue-600 font-bold text-xl mb-2 mt-8">
            Software & Applications
          </div>
          {softwares.map((software) => (
            <li key={software.name} className="flex items-center mb-2">
              <span className="mr-2 text-blue-600">✓</span>
              <a
                href={software.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                {software.name}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}
