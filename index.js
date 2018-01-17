var katzDeli = [];

var takeANumber = (katzDeliLine, newName) => {
  katzDeliLine.push(newName)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

var nowServing = (katzDeliLine) => {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var holder = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${holder}.`
  }
}
