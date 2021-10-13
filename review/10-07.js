// 小明是一間寵物咖啡廳的店員, 假設以下是店裡的資料庫

// 性別(sex)的資料類別爲數字, 0爲女孩子, 1爲男孩子
let pets = [
    {
	name: '雪納瑞',
	age: 70,
	sex: 0,
	breed: '樂天'
    },
    {
	name: '柴犬',
	age: 3,
	sex: 1,
	breed: '黑龍丸'
    },
    {
	name: '臘腸狗',
	age: 60,
	sex: 0,
	breed: '庫伯'
    },
    {
	name: '烏鴉',
	age: 2,
	sex: 1,
	breed: '托里'
    },
    {
	name: '邊境牧羊犬',
	age: 1,
	sex: 0,
	breed: '葉子'
    },
    {
	name: '迷你馬',
	age: 1,
	sex: 1,
	breed: '小馬哥'
    },
    {
	name: '卡羅萊納箱龜',
	age: 23,
	sex: 1,
	breed: '龜仙'
    },
    {
	name: '法國鬥牛犬',
	age: 4,
	sex: 1,
	breed: 'isuzu' // isuzu(五十鈴)是貨車品牌
    },
    {
	name: '白文鳥',
	age: 20,
	sex: 1,
	breed: '伊麗莎白'
    },
]

// 傻乎乎的小明下班前前發現自己寫錯了很多資訊
// 老闆看他不爽很久了, 這樣下去他會被老闆火掉
// 他家上有80歲老母下有8歲女兒
// 請用程式幫他把資料修正過來吧!

pets.map(pet => {
	return pet.

function swap(object, key1, key2) {
	let tmp = object[key1]
	object[key1] = object[key2]
	object[key2] = tmp
	return object
}

AND 且, OR 或
AND === &&
OR === ||
true && false => false
true || false => true
x/=10
// 已知錯誤如下:
// 1. 有些寵物在輸入年齡時不小心多按一個0, age > 30 && age % 10 === 0
// 2. 禍不單行, 年齡多按0的記錄也不小心把寵物性別寫反(0寫成1, 1寫成0)
// 3. 全部資料的品種跟寵物名字都被寫反