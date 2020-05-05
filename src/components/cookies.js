import * as Cookies from 'js-cookie';

export const setCookie = (session) => {
    Cookies.remove('session');
    Cookies.set("session", session, {expires:14});
};

export const getCookie = () => {
    const sessionCookie = Cookies.get("session");

    if(sessionCookie === undefined) return;
    return JSON.parse(sessionCookie);
};

