import MyMap from "@code/Map";

test("Map", function() {
    const map = new MyMap<string, number>();
    map.set("foo", 55);
    expect(map.size()).toEqual(1);
    map.set("fool", 75);
    expect(map.size()).toEqual(2);
    map.set("foolish", 105);
    expect(map.size()).toEqual(3);
    map.set("bar", 69);
    expect(map.size()).toEqual(4);

    console.log(map.size());

    expect(map.get("bar")).toEqual(69);
    expect(map.get("blaz")).toEqual(undefined);

    map.delete("bar")
    expect(map.size()).toEqual(3);
    map.delete("barblabr")
    expect(map.size()).toEqual(2);
    expect(map.get("bar")).toEqual(undefined);
});

