import { Webview } from "webview-bun";

// 遍历当前目录文件
// 用户目录的 .zshrc 文件
const fs = Bun.file("/Users/baboon/.zshrc");

const html = `
<html>
    <body>
        <h1>Hello from bun v${Bun.version} !</h1>
        <h2>File content:</h2>
        <pre>
        ${await fs.text()}
    </body>
</html>
`;

const webview = new Webview();

webview.setHTML(html);
webview.run();
