// 1
const obj1 = { key1: undefined, key2: "value" };
console.log(JSON.stringify(obj1)); // {"key2":"value"}

// 2
const arr1 = [undefined, 1, 2];
console.log(JSON.stringify(arr1)); // [null,1,2]

// 3
const date = new Date();
console.log(JSON.stringify(date)); // "2024-09-13T14:25:31.000Z"

// 4
const parsedDate = JSON.parse(JSON.stringify(new Date()));
console.log(parsedDate); // "2024-09-13T14:25:31.000Z"

// 5
const unsupportedTypes = ['undefined', 'function', 'symbol'];

// 6
const shallowVsDeepCopy = "얕은 복사는 객체의 참조만 복사하고, 깊은 복사는 객체 자체를 복사한다.";

// 7
const deepCopyLimit = "함수, undefined, Symbol 같은 값은 깊은 복사에서 제외된다.";

// 8
const shallowCopyMethods = ["Object.assign()", "spread operator (...)", "Array.prototype.slice()"];

// 9
const deepCopyExample = "중첩된 객체나 배열을 다룰 때, 원본 데이터에 영향을 주지 않기 위해 깊은 복사가 필요하다.";

// 10
const deepCopyMethod = "재귀 함수 사용, 또는 Lodash의 cloneDeep() 메서드.";

// 11
const assignLimit = "중첩된 객체는 참조만 복사되어 원본에 영향을 미칠 수 있다.";

// 12
const originalArray = [1, 2, { a: 3 }];
const copiedArray = [...originalArray];
copiedArray[2].a = 4;
console.log(originalArray); // [1, 2, { a: 4 }]
console.log(copiedArray); // [1, 2, { a: 4 }]

// 13
function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    const copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }
    return copy;
}

// 14
const objWithFunc = {
    a: 1,
    func: function() { console.log("hello"); }
};
console.log(JSON.stringify(objWithFunc)); // {"a":1}

// 15
const original = { a: 1, b: { c: 2 } };
const copy = JSON.parse(JSON.stringify(original));
copy.b.c = 3;
console.log(original.b.c); // 2
console.log(copy.b.c); // 3

// 16
const arr2 = [[1, 2], [3, 4]];
const slicedArray = arr2.slice();
slicedArray[0].push(5);
console.log(arr2); // [[1, 2, 5], [3, 4]]
console.log(slicedArray); // [[1, 2, 5], [3, 4]]

// 17
const parsed = JSON.parse('{"a":1, "b":true, "c":"hello"}');
console.log(parsed); // { a: 1, b: true, c: 'hello' }

// 18
const deepCopiedArray = JSON.parse(JSON.stringify(originalArray));
console.log(deepCopiedArray === originalArray); // false

// 19
const objWithSymbol = {
    a: 1,
    sym: Symbol('foo')
};
console.log(JSON.stringify(objWithSymbol)); // {"a":1} (Symbol은 직렬화되지 않음)

// 20
const circularObj = {};
circularObj.self = circularObj;
try {
    JSON.stringify(circularObj);
} catch (err) {
    console.log("Error: 순환 참조로 인한 직렬화 불가");
}
