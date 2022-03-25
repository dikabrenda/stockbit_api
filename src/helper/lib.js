import url from "url";

export const queryParams = (parameter) => {
    const params = new url.URLSearchParams(parameter);
    return params;
}