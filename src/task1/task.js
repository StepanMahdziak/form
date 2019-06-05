// interface TreeObject {
//     id: Number;
//     label: String;
//     childNodes: Array<TreeObject>;
// }
// const flattenDeep = (arr) => {
//     return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
// };
// const findLabelInTreeObject = (id: Number, object: TreeObject) => {
//     let result: String;
//     if (object.id === id) {
//         return object.label;
//     }
//     else {
//         if (object.childNodes) result = object.childNodes.map(o => findLabelInTreeObject(id, o))
//     }
//     return flattenDeep(result).filter(el => el.match(/[a-z]/gi)).join();
// };

// const object: TreeObject = {
//     id: 1,
//     label: 'a',
//     childNodes: [
//         {
//             id: 2,
//             label: 'B',
//             childNodes: [
//                 {
//                     id: 5,
//                     label: 'E',
//                     childNodes: [],
//                 },
//                 {
//                     id: 6,
//                     label: 'F',
//                     childNodes: [],
//                 },
//                 {
//                     id: 7,
//                     label: 'G',
//                     childNodes: [],
//                 },
//             ],
//         },
//         {
//             id: 3,
//             label: 'C',
//             childNodes: [],
//         },
//         {
//             id: 4,
//             label: 'D',
//             childNodes: [
//                 {
//                     id: 8,
//                     label: 'H',
//                     childNodes: [],
//                 },
//                 {
//                     id: 9,
//                     label: 'I',
//                     childNodes: [],
//                 },
//             ],
//         },
//     ],
// };