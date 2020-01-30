const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    return res.send(req.context.models.users[req.context.me.id]);
  });
export default router;
  
// Session routes or authenticated user


app.get('/session', (req, res) => {
    return res.send(req.context.models.users[req.context.me.id]);
  });