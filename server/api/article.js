const { Article } = require('../mongoose/model')

// CREATE
const articleCreate = async (req, res) => {
  const { content } = req.body
  const newArticle = await Article({ content })
  const saveRequest = await newArticle.save()
  console.log(saveRequest)
  res.send(saveRequest)
}

// READ
const articleRead = async (req, res) => {
  const articles = await Article.find({})
  res.send(articles)
}
// UPDATE
const articleUpdate = async (req, res) => {
  const { id, content } = req.body
  const updatedArticle = await Article.findOneAndUpdate(id, { content })
  res.send(updatedArticle)
}
// DELETE
const articleDelete = async (req, res) => {
  const { id } = req.params
  await Article.findByIdAndDelete(id)
  res.redirect('/read')
}

module.exports = {
  articleCreate,
  articleRead,
  articleUpdate,
  articleDelete,
}
