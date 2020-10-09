import Category from './category'

export default interface Item {
	id: number,
	name: string,
	description: string,
	releaseYear: number,
	rating: number,
	photo: string,
	categoriesId: number[],
	categories: Category[]
}