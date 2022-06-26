import Queue from "@code/Queue";

test("queue", function () {
    const list = new Queue<number>();

    list.enqueue(5);
    list.enqueue(7);
    list.enqueue(9);

    expect(list.dequeue()).toEqual(5);
    expect(list.length).toEqual(2);

    // this must be wrong..?
    debugger;

    // i hate using debuggers
    list.enqueue(11);
    debugger;
    expect(list.dequeue()).toEqual(7);
    expect(list.dequeue()).toEqual(9);
    expect(list.peek()).toEqual(11);
    expect(list.dequeue()).toEqual(11);
    expect(list.dequeue()).toEqual(undefined);
    expect(list.length).toEqual(0);

    // just wanted to make sure that I could not blow up myself when i remove
    // everything
    list.enqueue(69);
    expect(list.peek()).toEqual(69);
    expect(list.length).toEqual(1);
});
