let katzDeliLine = [];
function takeANumber(arr, name) {
  if (!arr.length) {
    arr.push(name);
    return `Welcome, ${name}. You are number 1 in line.`;
  }
  arr.push(name);
  return `Welcome, ${name}. You are number ${arr.length} in line.`;
}

function nowServing(arr) {
  if (arr.length) {
    let beingServed = arr.shift();
    return `Currently serving ${beingServed}.`;
  }
  return 'There is nobody waiting to be served!';
}
