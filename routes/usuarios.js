const { getUsuarios, putUsuario, postUsuario, deleteUsuario, patchUsuario } 
      = require( '../controllers/usuarios');

const { Router } = require('express');

const router = Router();


router.get('/', getUsuarios );

router.post('/', postUsuario) ;

router.put('/:id', putUsuario );

router.delete('/', deleteUsuario );

router.patch('/', patchUsuario );





module.exports = router;