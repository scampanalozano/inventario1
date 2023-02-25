const pool = require('../routes/db')

const getAll = async (req, res) =>{
   const allTask = await pool.query('SELECT * FROM empleados')
   res.send(allTask)
}

const getTask = async (req, res) =>{
    res.send('prueba')
}


const createTask = async (req, res) =>{
   const {cedula, nombres, apellidos, correo}= req.body;
   const result = await pool.query ("INSERT INTO empleados (cedula, nombres, apellidos, correo) VALUES ($1,$2,$3,$4)",[
    cedula,
    nombres, 
    apellidos, 
    correo
   ]);
   res.send(result)
  
}

const deleteTask = async (req, res) =>{
    res.send('prueba')
}

const updateTask = async (req, res) =>{
    const {cedula, nombres, apellidos, correo}= req.body;
    const result = await pool.query ("UPDATE empleados SET cedula ='$1', nombres='$2', apellidos='3?, correo)",[
     cedula,
     nombres, 
     apellidos, 
     correo
    ]);
    res.send('valio')
    console.log(result)
}


module.exports = {
    getAll,
    getTask,
    createTask,
    deleteTask,
    updateTask
}


