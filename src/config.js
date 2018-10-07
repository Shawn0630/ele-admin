import { override } from "./override";

const original = {
    apiRoot: "/apis/",
}

const config = {...original, ...override};

export {config};
