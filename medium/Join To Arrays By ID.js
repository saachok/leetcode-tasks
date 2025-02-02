const arr1 = [
    {
        "id": 1,
        "b": { "b": 94 },
        "v": [4, 3],
        "y": 48
    }
]

const arr2 = [
    {
        "id": 1,
        "b": { "c": 84 },
        "v": [1, 3]
    }
]

function join(arr1, arr2)  {
    const joinedArray = [...arr1, ...arr2];

    return Object.values(
        joinedArray.reduce((acc, obj) => {
            acc[obj.id] = { ...acc[obj.id], ...obj };

            return acc;
        }, {})
    )
};

console.log(join(arr1, arr2));
