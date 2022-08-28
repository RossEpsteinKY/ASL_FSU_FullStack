
const isAuthenticated = async (request,response,next) => {
    if(typeof request.session.access_token !== "undefined"){
        next();
        return;
    }
    else{
        // response.redirect('/auth/login')
        return false;
    };
}

module.exports = {
    isAuthenticated
}
