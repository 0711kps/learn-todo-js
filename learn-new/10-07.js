greet1()

function greet1 () {
    console.log('hello')
}

greet1()

greet2()
let greet2 = function () {
    console.log('hello')
}

greet2()

// 主要區別在於用let的方式
// 其實是把一個匿名函數存在 greet 這個變數

// 實際使用上還有一個差別
// 用function關鍵字的定義方式(普通函數)程式在執行時會優先定義這些函數
// 然後才開始由上而下執行程式
// 所以就算greet1寫在 function greet1 上面也可以正常執行
// greet2 實際上是一個變數, 所以在定義前使用會出現 greet2 is undefined 這類的錯誤
// 但是魷魚greet2的寫法其實更能弄清楚程式的邏輯跟執行順序
// (例如B函數呼叫A函數, 你不需要翻遍整個檔案找A, A一定在B上面)
// 後來隨著Javascript更新, 匿名函數還出現了更短的寫法
// 叫做箭頭函數, 算是目前的主流

// 上面的函數寫成箭頭函數 arrow function
let greet3 = () => {
    console.log('hello')
}

// 如果這個函數有參數則是
let greet4 = (word, person) => {
    console.log(person, ', ', word)
}

// 如果箭頭函數的參數只有一個, 連參數區的括號都可以省略
let greet5 = word => {
    console.log(word)
}

// let 變數名稱 = 參數 => {
//    函數內文/
// }

// // // Array 相關的好用函數
// filter (過濾、篩選)
let array = [1,2,3,4,5]
let filteredResult = array.filter(number => {
    return number > 2
})
filteredResult // [3,4,5]

// includes (檢查是否包含某個特定的值)
let array2 = [3,5,7,9,11]
array2.includes(5) // true
array2.includes(2) // false

// forEach (依序訪問每個元素並使用那個元素的值做某件事)
let array3 = ['企鵝', '樂樂', '柴犬']
array3.forEach(animal => {
    console.log(animal, '超可愛')
})

// map (同 forEach, 但是最後會把函數中 return 的值用來替代原本的元素)
let array4 = [1,4,9]
let mappedArray4 = array4.map(number => {
    return number * 2
})
mappedArray4 // [2,8,18]
