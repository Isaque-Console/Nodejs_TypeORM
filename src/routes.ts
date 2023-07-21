import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { GetUserController } from "./controller/GetUserController";
import { ensureAuthenticatedAndAuthorized } from "./middlewares/ensureAuthenticatedAndAuthorized";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { DeleteUserController } from "./controller/DeleteUserController";

const router = Router();

router.get("/user/:userId", ensureAuthenticatedAndAuthorized, new GetUserController().handle);
router.post("/users", new CreateUserController().handle);
router.post("/login", new AuthenticateUserController().handle);
router.delete("/user/:userId", ensureAuthenticatedAndAuthorized, new DeleteUserController().handle);

export { router }