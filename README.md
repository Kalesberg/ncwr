# OSU - National Center for Wellness and Recovery

# Project Structure
This template uses [Gatsby](https://gatsbyjs.com) and [Forestry](https://forestry.io). Pages are created in Forestry using JSON files and combine blocks specific to site functionality. This creates a CMS interface that is easy for a client to use and project code that is cleanly organized and easy for developers to configure.

## Pages
Each page is defined in a JSON file in `.forestry/content/pages/` Each page uses the page layout in `/src/templates/page/page.tsx` and blocks from `/src/components/main/blocks`. Each page has a title, blocks, and an optional slug.

## Layout
All pages use `/src/components/layout/layout.tsx` to include the site-wide header and footer and to pass SEO values.

## Blocks
Blocks are components that display page elements. A block could be an image, a button, or even a blog index with access to hundreds of articles. All blocks have an associated style file and are stored as a subfolder of `/src/components/main/blocks`. Individual block descriptions are in the README.md file for each block.

Blocks are also used for header and footer content with a similar structure.

## Styles
All styles utilize CSS modules in `*.module.scss` files to ensure styling one component has no side-effect on another component. Styles should be nested within `.section` and all classNames should be in the format `className={styles.className}` to ensure styles are scoped correctly.

All component-specific styles should be in the folder for that component. These files have all been created for you, but if you decide to compose blocks with smaller components, please mimic the structure already present.

Global styles like font imports should occur in the `global.scss` file in `/src/components/layout`.

# Coding Standards for Gatsby projects
- Use Typescript, even if it is only a basic implementation of it. Typescript ensures the stability of our code to prevent headaches later by linting code more deeply in addition to the type-safety it brings when utilized fully.
- Use [JavaScript Standard Style](https://standardjs.com). This will ensure our code formatting is clean and consistent.
- Use the extension `.tsx` for files containing React code and `.ts` for Typescript/JavaScript files.
- Only one React component per file. If other components are necessary, create separate files.
- Avoid using class components in React.
- Pages should always be programatically generated using `gatsby-node.js` instead of through the pages folder in the `src` directory. This ensures it is easier for content editors and the client to manage their application through the CMS.
- The **Preparing Your Environment** section includes the software we use for project development. When all developers use the same applications and configuration, troubleshooting is much easier.
- Run lighthouse tests on every project before completion and resolve any resolvable issues.
- Always resolve any problems in the Visual Studio Code **PROBLEMS** tab.
- Always resolve warnings in the terminal output if it is possible to resolve them. If a problem seems unresolvable, pair with other developers.

# Preparing Your Environment
These instructions are for macOS 11 (Big Sur). Other operating systems may need special consideration. If you already have nodejs, yarn and Visual Studio Code installed and up-to-date, skip to the **Visual Studio Code Configuration** section.

## Required Installations
### Command Line Developer Tools
From a terminal, type `xcode-select --install` and follow the prompts.
### Node.js
[Download](https://nodejs.org/en/download/current/) and install the latest version for Mac.
### Yarn
From a terminal, copy and paste this command then close and reopen your terminal window.
```
cd && touch .zshrc && curl -o- -L https://yarnpkg.com/install.sh | zsh
```
### Visual Studio Code
[Download](https://go.microsoft.com/fwlink/?LinkID=534106) and install the latest version for Mac.

## Visual Studio Code Configuration
Visual Studio code has an overwhelmingly large number of options and plugins. While you're free to choose additional plugins to assist with coding (as long as they do not conflict with the **Coding Standards** above), the following plugin and configuration is required.

### Install the StandardJS - JavaScript Standard Style Plugin (required)
Click **Install** [here](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs).
### Set the Base Configuration Settings
From a terminal, run this command.
```
code ~/Library/Application\ Support/Code/User/settings.json
```
Somewhere in this file, ensure these properties are set as follows:
```
{
...
  "standard.autoFixOnSave": true,
  "standard.engine": "standardx",
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "editor.wordWrap": "on"
...
}

```
# Working with the Project
## Clone the Project Locally
In order to start working on a project, it will need to be cloned to your computer. All projects will be under the s8webteam GitHub account and you will use your individual GitHub account to edit the project.
 1. On the repository page, click the green **Code** button and copy the URL under **Clone** with **HTTPS** selected.
 2. In your terminal, navigate to your development folder (a folder of your choosing) and type: `git clone `, then paste the copied URL and press enter.

## Install project dependencies
Navigate to the project in your terminal and enter the following command:
```
yarn
```
After `yarn` completes, restart Visual Studio Code if it was already running. This is to ensure `standardx` is loaded. The `yarn` command only needs to be performed once when the project is first cloned and any time another developer makes changes to project packages.

## Run the project
Run:
```
yarn develop
```

After a few minutes the project will be ready to preview and develop at [localhost:8888]. Pair with other developers if there is an issue with this step.

# Project Structure
## .cache
Generated by Gatsby. Ignore.
## .forestry
Generated by Forestry. Modifications should be made from the [Forestry](https://forestry.io) interface. Do not modify manually.
## node_modules
Generated by `yarn`. Use `yarn add` to install additional packages. Do not modify this folder manually.
## public
Generated by Gatsby to store the built site. Any files you want to add manually here should be placed in the `static` folder.
## src
Where all site code and styles are stored.
### src/components
Code and styles for the header, footer, and layout of every page.
### src/templates
Code for generating pages from templates.
## static
Files that will be accessible at baseurl/filename. You probably will not need to add anything here as all required images are imported from Forestry and available through GraphQL.
## .gitignore
Stores the files and directories git should not index. This has already been configured and shouldn't need to be modified.
## gatsby-browser.js
Code that runs in the browser separately from Gatsby. This file is for code loaded at runtime that do not belong in the app context.
## gatsby-config.js
Configuration for the site metadata and Gatsby plugins. You may need to use this if you are adding additional Gatsby plugins.
## gatsby-node.js
This tells Gatsby what pages to set up. Modification is potentially site breaking so only commit working code.
## package.json
Lists project configuration and NPM packages. Do not modify the dependencies or devDependencies directly as this file is partially generated by Yarn. 
## README.md
You're reading this right now. Feel free to modify.
## yarn.lock
Yarn automatically generates this file. Do not modify it manually.

# Make Changes to Forestry Content
 You will be receive a separate invitation for this through email. Let the team know if you need this and haven't received it.

 1. Log in to Forestry.
 2. Select the appropriate site from the [Dashboard](https://app.forestry.io/dashboard/#/).
 3. Make and save changes.
 4. Wait for the ring next to the Forestry or company logo to turn green.
 5. Return to Visual Studio Code and perform a git pull (click the circular arrows in the status bar).


# Preview Changes
As long as the development server is running, you should automatically see your changes in the browser. If you do not, try the steps below in order and stop after you see your changes.
 1. Refresh your browser window
 2. Terminate the Gatsby process in your terminal by pressing `control + c` twice, then run `yarn develop` preceded by required environment variables again.
 3. Try the previous step again, but before re-running `yarn develop`, run `yarn clean`.
 4. Terminate the Gatsby process, run `rm -rf node_modules`, then `yarn`, then `yarn develop`.

# Saving Changes to the Project
Commit changes back to GitHub directly. Pull requests are not necessary.