import puppeteer from "puppeteer-core";
const os = require("os");
const isLinux = os.platform() === "linux";
const path = isLinux
  ? "/usr/bin/google-chrome" // GitHub Actions (Linux)
  : "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"; //

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: path,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const pages = await browser.newPage();
  await pages.goto(
    "https://aditya-23140.github.io/Self-Projects/screenshot-pipeline",
    { waitUntil: "networkidle2" }
  );

  await pages.screenshot({ path: "screenshot.png", fullPage: true });
  await browser.close();
})();
