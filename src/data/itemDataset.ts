import Item from '../model/item'

export default class ItemDataset {

	private static instance = new ItemDataset()

	private itens: Item[]

	private constructor() {
		this.itens = Array<Item>()
	}

	static getInstance(): ItemDataset {
		return this.instance
	}

	insertNewItem(
		name: string,
		description: string,
		releaseYear: number,
		rating: number,
		photo: string,
		categoriesId: number[]
	): void {
		this.insertItem({
			id: this.itens.length,
			name,
			description,
			releaseYear,
			rating,
			photo,
			categoriesId
		})
	}

	insertNewItemAsObject(item: {
		name: string,
		description: string,
		releaseYear: number,
		rating: number,
		photo: string,
		categoriesId: number[]
	}
	): void {
		const { name,
			description,
			releaseYear,
			rating,
			photo,
			categoriesId
		} = item
		this.insertItem({
			id: this.itens.length,
			name,
			description,
			releaseYear,
			rating,
			photo,
			categoriesId
		})
	}

	insertItem(item: Item): void {
		this.itens.push(item)
	}

	getItems(): Item[] {
		return this.itens
	}

	getItensByName(name: string): Item[] {
		const filteredResult = this.itens.filter(element => {
			element.name.toLowerCase().includes(name.toLowerCase())
		})
		if (filteredResult)
			return filteredResult
		else
			throw new Error(`Not founded item with name: ${name}`)
	}

	getItemById(id: number): Item {
		const filteredResult = this.itens.find(element => element.id === id)
		if (filteredResult)
			return filteredResult
		else
			throw new Error(`Not founded item with id: ${id}`)
	}

	getItensByCategoryId(categoryId: number): Item[] {
		const filteredResult = this.itens.filter(element => {
			element.categoriesId.includes(categoryId)
		})
		if (filteredResult)
			return filteredResult
		else
			throw new Error(`Not founded item with category id: ${categoryId}`)
	}

	updateItem(id: number,
		newItem: {
			name: string | undefined,
			description: string | undefined,
			releaseYear: number | undefined,
			rating: number | undefined,
			photos: string | undefined,
			categoriesId: number[] | undefined

		}
	): void {
		const { name, description, releaseYear, rating, photos, categoriesId } = newItem
		const toUpdate = this.getItemById(id)
		toUpdate.description = name || toUpdate.description
		toUpdate.description = description || toUpdate.description
		toUpdate.releaseYear = releaseYear || toUpdate.releaseYear
		toUpdate.rating = rating || toUpdate.rating
		toUpdate.photo = photos || toUpdate.photo
		toUpdate.categoriesId = categoriesId || toUpdate.categoriesId
		this.deleteById(id)
		this.insertItem(toUpdate)
	}

	deleteById(id: number): void {
		this.itens = this.itens.filter(element => element.id !== id)
	}

	deleteAll(): void {
		this.itens = Array<Item>()
	}
}