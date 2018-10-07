import services from './services';

export default {
    namespace: 'result',

    state: {
        shopList: [],
    },

    effects: {
        *getShopList(action, effect) {
            const { call, put } = effect
            const response = yield call(services.getShopList, action.payload)
            yield put({
                type: 'gotData',
                payload: response,
                field: "shopList"
            });
        },
    },

    reducers: {
        gotData(state, action) {
            const copy = { ...state };
            copy[action.field] = action.payload;
            return copy; 
        }
    }
}