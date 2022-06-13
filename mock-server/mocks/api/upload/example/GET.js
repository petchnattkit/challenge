module.exports = (req, res) => {
  res.set('Allow', 'GET');
  return res.send(405, 'Method Not Allowed');
}