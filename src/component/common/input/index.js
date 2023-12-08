import './style.css'

const Inputbox=({type,placeholder,value,onClickValue,onChangeValue,error,onkeydown,inputRef})=>{
    return(
      <div>
        <input type={type} ref={inputRef} onKeyDown={onkeydown} placeholder={placeholder} value={value} onClick={onClickValue} onChange={(e)=>onChangeValue(e)}/>
        {
            error != "" &&
            <p className="error">{error}</p>
        }
      </div>

    )
}


export default Inputbox;

