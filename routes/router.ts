import { Router, Request,Response } from "express";

export const router = Router();

router.get('/mensajes/:id',(req:Request, res:Response)=>{
    const id = req.params.id
    console.log(id)
    res.json({
        ok:true,
        mensaje:'Todo esta bien'
    })
})

router.post('/mensajes',(req:Request, res:Response)=>{
    const body = req.body;
    res.json({
        ok:true,
        mensaje:'Todo esta bien',
        nombre: body.nombre
    })
})

export default router