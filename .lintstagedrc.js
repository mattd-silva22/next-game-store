module.exports = {
  // Lint & Prettify TS and JS files
  "*.{js,jsx,ts,tsx}": (filenames) => [
    `prettier --write ${filenames.join(" ")}`,
    `yarn lint --fix . ${filenames.join(
      " --file",
    )}``yarn test -- --findRelatedTests ${filenames.join(" ")}`,
  ],
};
