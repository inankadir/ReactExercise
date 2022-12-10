import "./formInput.css"

const FormInput = (props) => {
  return (
    <div className="formInput">
         {/*<label>Username</label>*/}
         <input placeholder={props.placeholder} onChange={e=>props.setUsername(e.target.value)} />
    </div>
  );
};

export default FormInput
