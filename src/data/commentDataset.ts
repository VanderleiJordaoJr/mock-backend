import Comment from '../model/comment'

export default class CommentsDataset {

	private static instance = new CommentsDataset()

	private comments: Comment[]

	private constructor() {
		this.comments = Array<Comment>()
	}

	static getInstance(): CommentsDataset {
		return this.instance
	}

	insertComment(username: string, comment: string, itemId: number): void {
		this.comments.push({
			id: this.comments.length,
			username,
			comment,
			itemId
		})
	}

	getCommentsByItemId(itemId: number): Comment {
		const filteredResult = this.comments.find(element => element.itemId === itemId)
		if (filteredResult)
			return filteredResult
		else
			throw new Error(`Not founded comment with item id: ${itemId}`)
	}

	deleteById(id: number): void {
		this.comments = this.comments.filter(element => element.id !== id)
	}
}
