/*
        * const util = require('util'),
         *     arr = [1, 2],
         *     arrayLikeObj = {'0': 1, '1', 2, length: 2},
         *     callback = (element, index, arr) => {
         *         console.log(`element : ${element}, index : ${index}, arr : ${JSON.stringify(arr)}`)
         *     },
         *     thisArg = {name: 'thisArg'},
         *     obj = {a: '10', b: {c: 1}},
         *     map = new Map()
         *
         * map.set('a', 10)
         * map.set('b', 20)
         *
         * let curriedFn
         *
         * util.each(
         *     arr,
         *     (element, index, arr) => console.log(`element : ${element}, index : ${index}, arr : ${JSON.stringify(arr)}`))
         * // element : 1, index : 0, arr : [1,2]
         * // element : 2, index : 1, arr : [1,2]
         *
         * util.each(
         *     arrayLikeObj,
         *     (element, index, arr) => console.log(`element : ${element}, index : ${index}, arr : ${JSON.stringify(arr)}`))
         * // element : 1, index : 0, arr : [1,2]
         * // element : 2, index : 1, arr : [1,2]
         *
         * util.each(
         *     obj,
         *     (value, key, obj) => console.log('value :', value, ', key :', key, ', obj :', JSON.stringify(obj)))
         * // value : 10, key : a, obj : {"a":"10","b":{"c":1}}
         * // value : { c: 1 }, key : b, obj : {"a":"10","b":{"c":1}}
         *
         * util.each(
         *     map,
         *     (value, key, map) => console.log('value :', value, ', key :', key, ', map :', map))
         * // value : 10, key : a, map : Map { 'a' => 10, 'b' => 20 }
         * // value : 20, key : a, map : Map { 'a' => 10, 'b' => 20 }
         *
         * curriedFn = util.each(
         *     callback)
         * curriedFn(arr)
         * // element : 1, index : 0, arr : [1,2]
         * // element : 2, index : 1, arr : [1,2]
         *
         * util.each(
         *     arr,
         *     function (element, index, arr) {
         *         console.log(`element : ${element}, index : ${index}, arr : ${JSON.stringify(arr)}, thisArg : ${JSON.stringify(this)}`)
         *     },
         *     thisArg)
         * // element : 1, index : 0, arr : [1,2], thisArg : {name:"thisArg"}
         * // element : 2, index : 1, arr : [1,2], thisArg : {name:"thisArg"}
         *  
*/

const util = require('@amuzlab/utils'),
        arr = [1,2];
    
util.each(
    arr,
    (element, index, arr) => console.log(`element : ${element}, index : ${index}, arr : ${JSON.stringify(arr)}`)
)