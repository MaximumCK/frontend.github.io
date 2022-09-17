
let url = `https://chongthong-guide.herokuapp.com/`
const PROXY_CONFIG = [
    {
        context: "/loginmenu",
        target: `${url}/ionic/login`,
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
            "^/loginmenu": ""
        }
    }, {
        context: "/informationgetView",
        target: `${url}/ionic/informationgetView`,
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
            "^/informationgetView": ""
        }
    }, {
        context: "/informationgetinsert",
        target: `${url}/ionic/informationgetinsert`,
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
            "^/informationgetinsert": ""
        }
    }, {
        context: "/informationgetupdate",
        target: `${url}/ionic/informationgetupdate`,
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
            "^/informationgetupdate": ""
        }

    }, {
        context: "/informationgetdelete",
        target: `${url}/ionic/informationgetdelete`,
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
            "^/informationgetdelete": ""
        }
    },{
        context: "/register",
        target: `${url}/ionic/register`,
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
            "^/register": ""
        }
    }
]
module.exports = PROXY_CONFIG;
