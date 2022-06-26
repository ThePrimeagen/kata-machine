import LinkedList from "@code/SingleLinkedList";
import { test_list } from "./ListTest";

test("linked-list", function () {
    const list = new LinkedList<number>(3);
    test_list(list);
});
