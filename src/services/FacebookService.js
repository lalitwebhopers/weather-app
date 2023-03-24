import Http from "./http"

export default class FacebookService {
    static login() {
        return Http.get(`dialog/oauth?client_id=3254980714832646&redirect_uri=https://fbleads.netlify.app/homepage&state="{st=state123abc,ds=123456789}"`);
    }
}
