module.exports = (req, res) => {
  if (req.query.error) {
    return res.status(500).json({
      error: "Something went wrong"
    })
  }
  return res.status(200).json({
    success: true
  })
}
