import ArrayList from "@code/array-list";

test("array-list", function() {
    const list = new ArrayList<number>(3);

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
    expect(list.capacity).toEqual(3);

    list.add(11);
    list.add(13);
    expect(list.length).toEqual(5);
    expect(list.capacity).toEqual(6);
});



