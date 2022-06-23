import ArrayList from "@code/ArrayList";

test("array-list", function() {
    const list = new ArrayList<number>(3);

    list.add(5);
    list.add(7);
    list.add(9);

    expect(list.get(2)).toEqual(9);
    expect(list.removeAt(1)).toEqual(7);
    expect(list.length).toEqual(2);

    list.add(11);
    expect(list.removeAt(1)).toEqual(9);
    expect(list.remove(9)).toEqual(undefined);
    expect(list.removeAt(0)).toEqual(5);
    expect(list.removeAt(0)).toEqual(11);
    expect(list.length).toEqual(0);

    list.add(5);
    list.add(7);
    list.add(9);
    expect(list.length).toEqual(3);
    expect(list.removeAt(1)).toEqual(7);
    expect(list.capacity).toEqual(3);

    list.add(11);
    list.add(13);
    expect(list.length).toEqual(4);
    expect(list.capacity).toEqual(6);
});



