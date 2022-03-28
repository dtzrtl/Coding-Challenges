class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

sif = new SmallestIntegerFinder();

console.log(sif.findSmallestInt([34, 15, 88, 2]));
