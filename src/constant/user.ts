export enum Gender_en {
	FEMALE = 'female',
	MALE = 'male',
}

// enum Language {
// 	ZH = '中文',
// 	EN = '英语',
// }

export enum Gender_zh {
	FEMALE = '女',
	MALE = '男',
}

export const Gender_enToGender_zh = (type: Gender_en) => {
	switch (type) {
		case Gender_en.FEMALE:
			return Gender_zh.FEMALE
		case Gender_en.MALE:
			return Gender_zh.MALE
	}
}
