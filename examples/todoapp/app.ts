import { SizeHint, Webview } from "webview-bun";
//@ts-ignore
import html from "./ui.html" with { type: "text" };

const webview = new Webview(false, {
  height: 500,
  width: 800,
  hint: SizeHint.NONE,
});
webview.title = "Bun App";
webview.setHTML(html);
webview.run();
