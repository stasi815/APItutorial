const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.users));
});
router.get('/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});
export default router;
// user routes

app.get('/users', (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

app.get('/users/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});
app.put('/users/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.userId} resource`,
  );
});
app.delete('/users/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource`,
  );
});


