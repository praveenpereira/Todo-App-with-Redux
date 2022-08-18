
export const ADDTODO = "ADDTODO";
export const DELETETODO = "DELETETODO";
export const DELETEALL = "DELETEALL";


export const addtodo=(payload)=>{
  return{
       type: ADDTODO,
       payload
}
}
export const deletetodo=(payload)=>{
  return{
    type: DELETETODO,
    payload
}
}
export const deleteall=()=>{
  return{
    type: DELETEALL
  }
}