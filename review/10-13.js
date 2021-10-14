// 1. 排序

// 請寫一個function mySort
// 接受一個放滿數字的陣列 numbers 作為參數
// 回傳排序過的相同陣列, 例如: 輸入 [1,3,2], 回傳 [1,2,3]
// 提示: 訪問所有子元素, 兩兩比較大小後, 根據
// 比對結果決定是否交換位置

const mySort = numbers => {
    return numbers
}

// 用這個來驗證答案
console.log('輸入數字', [1,7,6,5,2])
console.log('期待回傳的結果', [1,2,5,6,7])
console.log('實際回傳結果', mySort([1,7,6,5,2]))

// 2. 尋找
// 請寫一個function myFindIndex
// 接受兩個參數, 放滿數字的陣列 numbers, 與 目標值 target
// 回傳 第一個符合條件的值在什麼位置
// 例如: 輸入 [9,8,7,6,3] 與 6, 由於6在第4個位置, index 為3, 回傳 3
// 如果沒有找到任何符合目標的值, 則回傳 -1
// 提示: 訪問所有子元素, 但如果找到符合條件的元素後立刻回index值,  中斷程式

const myFindIndex = (numbers, target) => {
    return // 目標值所在的位置
}




























































mySort = numbers => {
    for(let i=0; i<numbers.length-1; i++) {
	if (numbers[i] > numbers[i+1]) {
	    let tmp = numbers[i]
	    numbers[i] = numbers[i+1]
	    numbers[i+1] = tmp
	}
    }
    return numbers
}

myFindIndex = (numbers, target) => {
    let targetIndex = -1
    for(let i=0; i<numbers.length; i++) {
	if (numbers[i] === target) {
	    targetIndex = i
	    break
	}
    }
    return targetIndex
}
