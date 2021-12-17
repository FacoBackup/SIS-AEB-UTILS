import getHostAddress from "./getHostAddress";

export default function Host(suffix) {
    return `${getHostAddress()}/api/${suffix ? suffix : 'sap'}/`
}
