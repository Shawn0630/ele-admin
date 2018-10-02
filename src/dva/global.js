const handleData = (state = { isFetching: true, data: {} }, data) => {
    return { ...state, 
        isFetching: false, 
        data: data 
    };
};

export default {
    namespace: 'global',

    state: {
        auth: {},
        responsive: {}
    },

    effects: { 
        *receiveData({ payload }, { put }) {
            yield put({
                type: 'putData',
                payload,
            });
        },
    },

    reducers: {
        putData(state, { payload }) {
            const copy = {...state};
            copy[payload.category] = handleData(state[payload.category], payload.data)
            return copy;
        }
    }
}