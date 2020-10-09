import Category from '../model/category'

export default class CategoryDataset {
	private static instance = new CategoryDataset()

	private categories: Category[]

	private constructor() {
		this.categories = Array<Category>()
	}

	static getInstance(): CategoryDataset {
		return this.instance
	}

	insertNewCategory(name: string): void {
		this.insertCategory({
			id: this.categories.length,
			name
		})
	}

	insertCategory(category: Category): void {
		this.categories.push(category)
	}

	getCategories(): Category[] {
		return this.categories
	}

	getCategoriesById(id: number): Category {
		const filteredResult = this.categories.find(element => element.id === id)
		if (filteredResult)
			return filteredResult
		else
			throw new Error(`Not founded category with id: ${id}`)
	}

	updateCategory(id: number, name: string): void {
		const toUpdate = this.getCategoriesById(id)
		this.deleteCategoryById(id)
		toUpdate.name = name
		this.insertCategory(toUpdate)
	}

	deleteCategoryById(id: number): void {
		this.categories = this.categories.filter(element => element.id !== id)
	}

	deleteAll(): void {
		this.categories = Array<Category>()
	}
}