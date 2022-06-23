import LinkedList from "@code/doubly-linked-list";

test("linked-list", function() {
    const list = new LinkedList<number>();

    list.add(5);
    list.add(7);
    list.add(9);

    expect(list.remove()).toEqual(5);
    expect(list.length).toEqual(2);

    list.add(11);
    expect(list.remove()).toEqual(7);
    expect(list.remove()).toEqual(9);
    expect(list.remove()).toEqual(11);
    expect(list.remove()).toEqual(undefined);
});



