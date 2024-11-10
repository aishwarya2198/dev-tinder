const adminAuth = (req, res, next) => {
    console.log("Admin Auth is getting checked!");
    const token = "xyz";
    const isAuthenticated = token === "xyz";
    if(!isAuthenticated){
        res.status(401).send("Unathourized Request!");
    }else{
        next();
    }
}

const userAuth = (req, res, next) => {
    console.log("User Auth is getting checked!");
    const token = "xyz";
    const isAuthenticated = token === "xyz";
    if(!isAuthenticated){
        res.status(401).send("Unathourized Request!");
    }else{
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth
}