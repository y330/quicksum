var summarize = window.require("text-summary")


export let text = "Put some text here."
export let numberSentences = 2
export let question = "What is the price of an umbrella?"

export const summarizer = (text, numberSentences) => {
	return summarize.summary(text, numberSentences)
}
export const questioner = (question, text, numberSentences) => {
	return summarize.summaryWithQuestion(
		question,
		text,
		numberSentences
	)
}