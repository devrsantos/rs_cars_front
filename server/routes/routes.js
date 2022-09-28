import e from "express";

const router = e.Router();

router.get("/", (request, response) => {
    response.render("index");
});

export default router;