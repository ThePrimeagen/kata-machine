import LinkedList from "@code/single-linked-list";

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
    expect(list.length).toEqual(0);

    list.add(5);
    list.add(7);
    list.add(9);
    expect(list.length).toEqual(3);
    expect(list.removeAt(1)).toEqual(7);
});


