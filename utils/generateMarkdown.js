// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (value === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (value === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  } else if (value === "Mozilla-Public") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
  } else if (value === "GNU-General-Public") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (value === "Common-Development-and Distribution") {
    return "[![License](https://img.shields.io/badge/License-CDDL%201.0-blue.svg)]";
  } else {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (value === "MIT") {
    return "[License](https://opensource.org/licenses/MIT)";
  } else if (value === "Apache") {
    return "[License](https://opensource.org/licenses/Apache-2.0)";
  } else if (value === "Mozilla-Public") {
    return "[License](https://opensource.org/licenses/MPL-2.0)";
  } else if (value === "GNU-General-Public") {
    return "[License](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "Common-Development-and Distribution") {
    return "[License](https://opensource.org/license/cddl-1-0)";
  } else {
    return ""; //"[License](http://unlicense.org/)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  userName = data.name;
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseDescription = renderLicenseSection(data.license);
  return `# ${data.title}
${licenseBadge}

${data.description}

## Table of Contents
 * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)

<a name="installation"/>

## Installation

${data.installation}

<a name="usage"/>

## Usage

${data.usage}


<a name="license"/>

## License

${licenseDescription}


<a name="Contributing"/>

## Contributing

${data.contributionGuidelines}


<a name="testing"/>

## Testing

${data.testing}

<a name="questions"/>

## Questions

[Email me](mailto:${data.emailAddress})

[Review my other projects on GitHub.](https://www.github.com/${data.username})
`;
}

module.exports = generateMarkdown;
