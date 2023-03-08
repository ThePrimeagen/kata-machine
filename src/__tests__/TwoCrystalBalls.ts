import two_crystal_balls from "@code/TwoCrystalBalls";

test("two crystal balls", function () {
    let idx = Math.floor(Math.random() * 10000);
    const data = new Array(10000).fill(false);

    for (let i = idx; i < 10000; ++i) {
        data[i] = true;
    }

    expect(two_crystal_balls(data)).toEqual(idx);
    expect(two_crystal_balls(new Array(821).fill(false))).toEqual(-1);

    // for testing exact sqrts
    let sqrti = Math.floor(Math.random() * 100);
    let dataSize = sqrti * sqrti;
    const sqrtsData = new Array(dataSize).fill(false);
    
    for(let i = sqrti; i < dataSize; i++) {
        sqrtsData[i] = true;
    }

    expect(two_crystal_balls(sqrtsData)).toEqual(sqrti);

});

