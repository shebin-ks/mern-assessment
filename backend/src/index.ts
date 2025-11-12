import app from "./app";
import { AppDataSource } from "./config/data-source";



const PORT = process.env.PORT || 3000

AppDataSource.initialize()
    .then(()=>{
        app.listen(PORT,()=> {
            console.log(`Server running at port ${PORT}`);
            
        })
    })
    .catch((err)=> {
        console.log(`DB connection error: ${err}`);
        
    })