function fA() {
  const vA = 1;
  console.log('RUNNING: fA...');
  console.log(`  vA = ${vA}`);
  function fB() {
    const vB = 2;
    console.log('RUNNING: fB...');
    console.log(`  vA = ${vA}`);
    console.log(`  vB = ${vB}`);
    function fC() {
      const vC = 3;
      console.log('RUNNING: fC...');
      console.log(`  vA = ${vA}`);
      console.log(`  vB = ${vB}`);
      console.log(`  vC = ${vC}`);
      const result = vA + vA2 + vB + vC;
      console.log('FINISHED: fC');
      return result;
    }
    console.log('FINISHED: fB');
    return fC;
  }
  const vA2 = 10;
  console.log('FINISHED: fA');
  return fB;
}

const fB = fA();
const fC = fB();
console.log(fC());

// 3:38pm - second code example:
function fX() {
  console.log('RUNNING: fX...');
  const result = fY() * 2;
  console.log('FINISHED: fX');
  return result;
}

function fY() {
  console.log('RUNNING: fY...');
  const result = fZ() * 2;
  console.log('FINISHED: fY');
  return result;
}

function fZ() {
  console.log('RUNNING: fZ...');
  const result = 2;
  console.log('FINISHED: fZ');
  return result;
}

console.log(fX());

// 4:08pm - third code example:

let result = 1;

function fX() {
  console.log('RUNNING: fX...');
  result = result * 2;
  console.log('FINISHED: fX');
}

function fY() {
  console.log('RUNNING: fY...');
  result = result * 3;
  console.log('FINISHED: fY');
}

function fZ() {
  console.log('RUNNING: fZ...');
  result = result * 4;
  console.log('FINISHED: fZ');
}

function main() {
  setTimeout(fX, 100);
  console.log('SCHEDULED: fX')
  setTimeout(fY, 200);
  console.log('SCHEDULED: fY')
  setTimeout(fZ, 300);
  console.log('SCHEDULED: fZ')
  setTimeout(() => {
    console.log(result);
  }, 400);
}

main();