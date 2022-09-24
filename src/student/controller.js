import { Router } from 'express';

const router = Router()

router.get('/', (req, res) => {
    res.send('usando a rota da API')
})

module.exports = router;