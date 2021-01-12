let spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', "\n"];
let i = 1;
for (const char of spinnerArray) {
  setTimeout(() => {
    process.stdout.write(char);
  }, (i * 100));
  i++;
  // console.log();
}