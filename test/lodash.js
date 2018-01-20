const _ = require('lodash');


let arrs = [{
    name: 'loumt',
    age: 18,
    remark: '哈哈'
}, {
    name: 'mike',
    age: 25,
    remark: '22'
}, {
    name: 'joney',
    age: 18,
    remark: '11'
}, {
    name: 'tony',
    age: 17,
    remark: '哈哈'
}];


// let obj = _.find(arrs, { name: 'loumt', age: 18 })
// console.dir(obj)


console.dir(_.find([{ name: 'icon', size: 256, format: 'png' }, { name: 'ic1on', size: 2526, format: 'pn2g' }], { name: 'icon', size: 256, format: 'png' }));