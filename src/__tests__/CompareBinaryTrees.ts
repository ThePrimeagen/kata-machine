import compare from "@code/CompareBinaryTrees";
import { tree, tree2 } from "./tree";

test("Compare Binary Trees", function () {
    expect(compare(tree, tree)).toEqual(true);
    expect(compare(tree, tree2)).toEqual(false);
});





