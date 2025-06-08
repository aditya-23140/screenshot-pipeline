import puppeteer from "puppeteer-core";
import os from "os";

const isLinux = os.platform() === "linux";
const path = isLinux
  ? "/usr/bin/google-chrome" // GitHub Actions (Linux)
  : "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"; //
const url = process.env.URL_TO_CAPTURE || "http://localhost:3000";

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: path,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const pages = await browser.newPage();
  await pages.goto(url, {
    waitUntil: "networkidle2",
  });

  await pages.screenshot({ path: "screenshot.png", fullPage: true });
  await browser.close();
})();
