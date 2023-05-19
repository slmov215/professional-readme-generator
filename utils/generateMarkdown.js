// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "Apache") {
    return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "Mozilla-Public") {
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
  } else if (license === "GNU-General-Public") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (license === "Common-Development-and Distribution") {
    return "![License](https://img.shields.io/badge/License-CDDL%201.0-blue.svg)";
  } else {
    return ""; //"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]" ;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[License](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "[License](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Mozilla-Public") {
    return "[License](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "GNU-General-Public") {
    return "[License](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "Common-Development-and Distribution") {
    return "[License](https://opensource.org/license/cddl-1-0)";
  } else {
    return ""; //"[License](http://unlicense.org/)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return (
   `## License 

   Copyright @ ${license}. All rights reserved.

   Licensed under the ${license} `
   );
  } 
  else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)
  * ${renderLicenseLink(data.license)}  

  ## Installation

  To install, run the command :

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}

  ## Contributing

  ${data.contribution}

  ## Testing

  To run tests, run these commands:

  \`\`\`
  ${data.test}
  \`\`\`

  ### Questions

  [Review my other projects on GitHub.](https://www.github.com/${data.github})

  [Email me](mailto:${data.email}) `;
}

module.exports = generateMarkdown;
