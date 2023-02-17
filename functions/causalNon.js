function isCausalSystem(system) {
  // Assume that 'system' is an array of numbers representing a signal processing system

  for (let i = 1; i < system.length; i++) {
    if (system[i] < system[i - 1]) {
      // If the output at time i depends on the input at time i-1, then the system is non-causal
      return false;
    }
  }

  // If we get to this point, then the system is causal
  return true;
}

module.exports = isCausalSystem;
