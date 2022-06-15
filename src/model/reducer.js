const data = [
  {
      name: "胡彦斌",
      part: "信息部",
      post: "前端工程师",
      password:"123456",
      phone:"13839688053",
      created_at: new Date().getTime(),
  },
];
// 初始状态
export const initState = {
    index: 0,
    data
  };
export function reducer(state,{type, ...payload}){
    switch(type) {
      case 'ADD_USER':{
        state.data.push(payload.obj)
        return {
          ...state,
          data:[...state.data]
        };
      }
      case 'SAVE_INDEX':{
        state.index=payload.index
        return {
          ...state
        };
      }
      case 'EDIT_USER':{
        state.data.splice(state.index,1,payload.obj)
        return {
          ...state,
          data:[...state.data]
        };
      }
      case 'REMOVE':{
        state.data.splice(payload.index,1)
        return {
          ...state,
          data:[...state.data]
        };
      }
      default: {
        return {...state}
      }
    }
  }
