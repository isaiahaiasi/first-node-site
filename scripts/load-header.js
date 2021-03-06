/* eslint-disable no-undef */

const navTemplateString = `
  <nav>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact-me">Contact</a>
      </li>
    </ul>
  </nav>
`;

const navTemplate = document.createElement("div");
navTemplate.innerHTML = navTemplateString;
document.body.prepend(navTemplate);
