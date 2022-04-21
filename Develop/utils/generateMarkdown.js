// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const badges = [
    "[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](http://unlicense.org/)",
    "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
];

function renderLicenseBadge(license) {
    if (license === "None") {
        license = "";
        return license;
    } else {
        return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink;
    // console.log(license);
    switch (license) {
        case "None":
            licenseLink = "";
            break;
        case "Unlicensed":
            licenseLink = "http://unlicense.org/";
            break;
        case "GPL":
            licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
            break;
        case "MIT":
            licenseLink = "https://opensource.org/licenses/MIT";
            break;
        case "Apache":
            licenseLink = "https://opensource.org/licenses/Apache-2.0";
            break;
        default:
            "";
    }
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        license = "";
        return license;
    } else {
        return `
        ## <h2 id="userLicense">**License**</h2>
        ### <em>NOTICE</em>:
        This project is licensed under the ${license} license.
        For more information, CLick Here:
        ${renderLicenseLink(license)}
`;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

`;
}

module.exports = generateMarkdown;
