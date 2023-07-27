// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {

    case 'APACHE 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

    case 'Boost':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;

    case `BSD-3`:
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;

    case `BSD-2`:
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;

    case `CC0`:
      return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;

    case `Eclipse`:
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;

    case `GPL-3`:
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

    case `GPL-2`:
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;

    case `IBM`:
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;

    case `ISC`:
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;

    case `MIT`:
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

    case `Mozilla`:
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;

    case `ODbL`:
      return `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;

     case `Perl`:
      return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;

    default:
      console.log(`License badge error`);
  }
}

function renderLicenseInfo(license) {
  switch (license) {
    case 'APACHE 2.0':
      return `Apache License 2.0: A permissive license that allows users to use, modify, and distribute the software under certain conditions. It requires users to retain the original copyright notice and include disclaimers.`;

    case 'Boost':
      return `Boost Software License 1.0: A permissive license that permits the use, modification, and distribution of the software while requiring attribution to the original authors. It also includes a "no endorsement" clause.`;

    case `BSD-3`:
      return `BSD 3-Clause License: A simple and permissive license that allows users to use, modify, and distribute the software as long as they include the original copyright notice and disclaimers.`;

    case `BSD-2`:
      return `BSD 2-Clause License: A simplified version of the BSD 3-Clause License, which allows users to use, modify, and redistribute the software as long as they include the original copyright notice.`;

    case `CC0`:
      return `CC0 (Creative Commons Zero) License: A public domain dedication that allows users to waive all their copyright and related rights to the software, effectively placing it in the public domain.`;

    case `Eclipse`:
      return `Eclipse Public License 1.0: A copyleft license that allows users to use, modify, and distribute the software, with the condition that any derivative works are also made publicly available under the same license.`;

    case `GPL-3`:
      return `GNU General Public License (GPL) version 3: A strong copyleft license that ensures the software and its derivatives remain open source and freely available to the public.`;

    case `GPL-2`:
      return `GNU General Public License (GPL) version 2: An earlier version of the GPL with similar copyleft requirements, ensuring the software and its modifications remain open source.`;

    case `IBM`:
      return `IBM Public License 1.0: A permissive license that allows users to use, modify, and distribute the software under certain conditions, including maintaining the original copyright notice.`;

    case `ISC`:
      return `ISC License: A permissive license that allows users to use, modify, and distribute the software with minimal restrictions. It requires users to include the original copyright notice.`;

    case `MIT`:
      return `MIT License: A permissive license that permits users to use, modify, and distribute the software while retaining the original copyright notice.`;

    case `Mozilla`:
      return `Mozilla Public License 2.0: A copyleft license that allows users to use, modify, and distribute the software. It requires modifications to be shared under the same license.`;

    case `ODbL`:
      return `Open Database License (ODbL): A copyleft license designed for databases, requiring that any derivative databases be shared under the same license.`;

     case `Perl`:
      return `Perl Artistic License 2.0: A flexible license for Perl modules that allows users to modify and distribute the software under certain conditions.`;

    default:
      console.log(`License badge error`);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const mdTitle = `# ${data.title}\n`;
  const mdDescription = `## Description\n${data.description}\n`;
  const mdInstallation = `## Installation\n${data.installation}\n`;
  const mdUsage = `## Usage\n${data.usage}\n`;
  const mdContributing = `## Contributions\n${data.contributing}\n`;
  const mdTests = `## Tests\n${data.tests}\n`;
  const mdLicenseBadge = `${renderLicenseBadge(data.license[0])}\n`; // right now this only gets the first choice the user selected. In the future, a for loop should be put here, otherwise maybe limit selection choice to only 1 selection via inquirer settings..?
  const mdLicense = `## License\n${renderLicenseInfo(data.license[0])}\n`;
  const mdQuestions = `## Questions\nContact me:\n${data.username}\n${data.email}\n`;

  const markDown = `${mdTitle}\n${mdLicenseBadge}\n${mdDescription}\n${mdInstallation}\n${mdUsage}\n${mdContributing}\n${mdTests}\n${mdQuestions}\n${mdLicense}`;

  return markDown;
}

module.exports = { generateMarkdown };
 