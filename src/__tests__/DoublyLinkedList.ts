import LinkedList from "@code/DoublyLinkedList";
import { test_list } from "./ListTest";

test("DoublyLinkedList", function () {
    const list = new LinkedList<number>(3);
    test_list(list);
});
