import { com } from "../models/ele";
import { ApiMethod, fetch } from "../utils/request";
import { decodeArray, deocdeItem } from "../utils/decoder";
const ShopProfile = com.ele.model.dto.ele.ShopProfile;

export default {
    async getShopList() {
        return fetch({
            endpoint: '/shop',
            method: ApiMethod.GET,
            useBuffer: true
        }).then(data => decodeArray(ShopProfile, data));
    }
}