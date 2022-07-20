import dfs from "@code/BTDFS";
import { tree } from "./tree";

test("bt dfs", function () {
    expect(dfs(tree, 45)).toEqual(true);
    expect(dfs(tree, 7)).toEqual(true);
    expect(dfs(tree, 69)).toEqual(false);
});





