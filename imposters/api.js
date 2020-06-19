const mbhelper = require("../mbhelper");
const userStubs = require("../stubs/user");

function addStubs() {
  const stubs = [...userStubs];

  const imposter = {
    port: 4006,
    protocol: "http",
    stubs: stubs,
  };

  return mbhelper.postImposter(imposter);
}

module.exports = { addStubs };
