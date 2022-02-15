import express from "express";

// import VideoController from "./controllers/VideoController";
// import VideoMiddleware from "./middlewares/VideoMiddleware";
import { 
            registerVariableExpenses, 
            registerFixedExpenses , 
            registerVariableRevenue ,
            registerFixedRevenue
        } from "./controllers/expensesControler.js";
import { getAllFixedRevenues , getDashboardData } from "./controllers/fillDashboards.js";


const routes = express.Router();

// routes.get("/videos", VideoController.index);

// routes.post("/videos", VideoController.store);

// routes.put("/videos/:id", VideoMiddleware.getVideo, VideoController.update);

// routes.delete("/videos/:id", VideoMiddleware.getVideo, VideoController.delete);

routes.post("/registervariablerevenue", registerVariableRevenue)

routes.post("/registerfixedrevenue", registerFixedRevenue)

routes.post("/registervariableexpenses", registerVariableExpenses)

routes.post("/registerfixedexpenses", registerFixedExpenses)

routes.get("/getallfixedrevenues", getDashboardData)

// routes.patch(
//   "/videos/:id",
//   VideoMiddleware.getVideo,
//   VideoController.updateLike
// );

export default routes
