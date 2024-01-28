const cloneArray = require('./cloneArray')

test('properly clones an array', () => {
    const arr = [1, 2, 3, 4, 5, ]
    expect(cloneArray(arr)).toEqual([...arr])
})