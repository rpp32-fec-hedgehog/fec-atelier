const app = require('./testApp.js')(app);
const port = 8080;

app.listen((port), () => {
  console.log(`listening on port ${port}`);
})
