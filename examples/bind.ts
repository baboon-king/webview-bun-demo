import { Webview } from "webview-bun";

const html = `
<html>
    <body>
        <h1>Hello from bun v${Bun.version} !</h1>
        <button onclick="press('I was pressed!', 123, new Date()).then(log);">
            Press me!
        </button>
    </body>
</html>
`;

const webview = new Webview();

let counter = 0;

webview.bind("press", (a, b, c) => {
  console.log(a, b, c);
  return { times: counter++ };
});

webview.bind("log", (...args) => console.log(...args));
webview.title = "Bun App";
webview.setHTML(html);
webview.run();
