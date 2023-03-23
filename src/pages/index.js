import { useEffect } from "react";

export default function Home() {
    const onLoginClick = () => {
        // FB.login(function (response) {
        //   console.log('Successfully logged in', response);
        //   FB.api('/me/accounts', function (response) {
        //     console.log('Successfully retrieved pages', response);
        //     var pages = response.data;
        //     var ul = document.getElementById('list');
        //     for (var i = 0, len = pages.length; i < len; i++) {
        //       var page = pages[i];
        //       var li = document.createElement('li');
        //       var a = document.createElement('a');
        //       a.href = "#";
        //       a.onclick = subscribeApp.bind(this, page.id, page.access_token);
        //       a.innerHTML = page.name;
        //       li.appendChild(a);
        //       ul.appendChild(li);
        //     }
        //   });
        // }, {});
        FB.login(function (response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function (response) {
                    console.log('Good to see you, ' + response.name + '.');
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    };

    useEffect(() => {

        window.fbAsyncInit = function () {
            FB.init({
                appId: '3254980714832646',
                cookie: true,
                xfbml: true,
                version: 'v15.0'
            });
            FB.AppEvents.logPageView();
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    }, []);

    return (
        <>
            <div>
                <button onClick={onLoginClick} type="button" className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                    </svg>
                    <span className="p-1">Facebook Login</span>
                </button>
            </div>
        </>
    )
}
