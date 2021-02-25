export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQD3m10HXNAWPOCbZ9i7WZzrN8AiCIokgiqB_6gSjnKbl1Itg1k6Yn-64Fuf_WDzELyhBfz6JsEE7iJr4aumnR067ayOyI_5YtWRHIzvgbSqY9Hx22FX7SoPNgDQhpqPmMybrRQsPnDanAy8rYZQhaSa5TdIRzyAhKedFrgIA48CnC4xaOBQ",
}

const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case 'setuser': return {
            ...state,
            user: action.user,
        }

        case 'settoken': return {
            ...state,
            token: action.token,
        };

        case 'setplaylists': return {
            ...state,
            playlists: action.playlists,
        };

        case 'setdicoverweekly': return {
            ...state,
            discover_weekly: action.discover_weekly,
        }

        default:
            return state;
    }
}

export default reducer;