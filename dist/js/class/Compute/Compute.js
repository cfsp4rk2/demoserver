export default class Compute {
}
Compute.constrain = (x, min, max) => Math.min(Math.max(x, min), max);
