for (let i = 0; i <= 10; i++) {
  setTimeout(() => {
    if (i === 1 || i === 5 || i === 9)
      process.stdout.write('\r|   ');
    if (i === 2 || i === 6)
      process.stdout.write('\r/   ');
    if (i === 3 || i === 7)
      process.stdout.write('\r-   ');
    if (i === 4 || i === 8)
      process.stdout.write('\r\\   ');
    if (i === 10)
      console.log();
  }, (i * 100));
}



// setTimeout(() => {
//   process.stdout.write('\r|   ');

// }, 100);
// setTimeout(() => {
//   process.stdout.write('\r/   ');

// }, 200);
// setTimeout(() => {
//   process.stdout.write('\r-   ');

// }, 300);
// setTimeout(() => {
//   process.stdout.write('\r\\  ');

// }, 400);
// setTimeout(() => {
//   process.stdout.write('\r|   ');

// }, 500);
// setTimeout(() => {
//   process.stdout.write('\r/   ');

// }, 600);
// setTimeout(() => {
//   process.stdout.write('\r-   ');

// }, 700);
// setTimeout(() => {
//   process.stdout.write('\r\\   ');

// }, 800);
// setTimeout(() => {
//   process.stdout.write('\r|   ');

// }, 900);
// setTimeout(() => {
//   console.log();

// }, 1000);