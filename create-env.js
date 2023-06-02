const fs = require("fs");
const path = `./.env`;
const vars = `
 ENV_VAR_1=${process.env.ENV_VAR_1_NETLIFY}\n
 ENV_VAR_2=${process.env.ENV_VAR_2_NETLIFY}
`;
fs.writeFileSync(path, vars);
