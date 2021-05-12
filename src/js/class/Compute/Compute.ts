export default class Compute {
    public static constrain = (x : number, min : number, max : number) : number => 
        Math.min(Math.max(x, min), max);
}