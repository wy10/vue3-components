export type blockType = {
  top:number,
  left:number,
  width:number,
  height:number,
  zIndex:number,
  alignCenter:boolean,
  key:string,
} 
export type containerType = {
  width:number,
  height:number,
}
export type componentType = {
  label:string,
  preview:Function,
  render:Function,
  key:string
}
export type stateProps = { container:containerType,blocks:blockType[]}