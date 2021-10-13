// 下列程式執行結束後, 變數 result 的值會是多少?
// 要注意switch敘述中沒有break時的行爲

let result = 0, x = 1, y = 99

// 用到的觀念
// 1. while 迴圈, 觀察變數的變化
// 2. switch 判斷式的行爲
=> 0123
// 根據傳入數字對 result 做不同的計算
// 這裡因爲 Javascript 的特性, function 內是可以讀取先定義好的外部 result 變數的
function doSomeCalculate(n) {
    switch(n) {
    case 0:
    case 1:
	result += 3
	break
    case 99:
	result += 7
    case 98:
	result += 6
    default:
	result -= 2
    }
}
// 1. 函數儘量不要修改外面的參數
// 2. 函數始終回傳一個值


// 流程有點多次, 要耐心哦揪咪
while (x < 3) {
    y = 99
    while (y > 96) {
	doSomeCalculate(x)
    result += dha(x)
	doSomeCalculate(y)
	y -= 1
    }
    x += 1
}

console.log(result) // 這裡會印出什麼


// 解答在下面






















console.log(result) // 29
// 重點 1).
//
// 當 n 爲 0 時, 會自動將下面的程式視爲滿足條件
// 所以會繼續執行 case1: ...
// 但是在 case1 碰到 break 而結束
// (實質上就是在寫"如果n是0或1")

// 重點 2).
//
// case 99以後都沒有寫 break
// 所以 case 99 如果滿足了
// 會一併執行 case 98 跟 default
// (case 98 滿足則是執行 case 98 跟 default)
