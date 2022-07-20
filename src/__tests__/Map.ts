import MyMap from "@code/Map";

test("Map", function() {
    const map = new MyMap<string, number>();
    map.set("foo", 55);
    map.set("fool", 75);
    map.set("foolish", 105);
    map.set("bar", 69);

    expect(map.get("bar")).toEqual(69);
    expect(map.get("blaz")).toEqual(undefined);

    map.delete("bar")
    expect(map.get("bar")).toEqual(undefined);
});

