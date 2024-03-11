import { configureStore,createSlice } from "@reduxjs/toolkit";
const initialState = {
    value:{
        username:" "
    }
};
const userSlice = createSlice({
    
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.value = action.payload;

        },
        logout:(state)=>{
            /** *
             * state = initialState;这样写不行是因为，redux要求reducer函数内部
             * 要是纯净的，即便是相同的输入，也应该返回一个相同值的新的state对象，所以直
             * 接这么改，赋值state是不奏效的，但是可以这么写
             *          state.value= initialState.value
             * 原因是：因为 Redux Toolkit 内部使用了 Immer 库，它允许你写看起来是“可变”的代码，
             * 但实际上 Immer 会安全地返回一个新的不可变状态。使用 Immer，你可以在 reducer 中
             * 直接修改 state 的属性，而不需要显式返回一个新对象。这是因为 Immer 会根据你所做的
             * 修改自动产生一个新的不可变状态。 
             * * **/
            return initialState;
        },
    },
})

export const {login ,logout} = userSlice.actions;

export const store = configureStore({
    reducer:{
        //userReducer 就是 userSlice.reducer
        user:userSlice.reducer,
    },
});