import Item from './item'

export default interface Comment {
	id: number,
	username: string,
	comment: string,
	itemId: number,
	item: Item
}