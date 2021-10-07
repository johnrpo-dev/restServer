
const { response, request } = ('express')

const usuariosGet = (req = request, res = response) => { 

    const query = req.query
    res.json({
        msg: 'get api - controlador',
        query
    })
}
const usuariosPost = (req, res) => { 

    const {Nombre, Edad} = req.body

    res.json({
        msg: 'post api - controlador',
        Nombre,
        Edad
    })   
}
const usuariosPut = (req, res) => { 

    const { id } = req.params

    res.json({
        msg: 'put api - controlador',
        id
    })
}
const usuariosDelete = (req, res) => { 

    res.json({
        msg: 'delete api - controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}