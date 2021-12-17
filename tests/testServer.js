const app = require('./testIndex.js');
const port = 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
