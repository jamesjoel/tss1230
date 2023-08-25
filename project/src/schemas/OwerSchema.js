import * as YUP from 'yup';

let owerSchema = YUP.object({
    ownername : YUP.string().required("Insert Your Full Name"),
    email : YUP.string().email("This Email Id is Not correct").required("Insert Email Id"),
    username : YUP.string().required("Insert Your Username"),
    password : YUP.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, {message : 'Your Password Should be at least 1 number, 1 uppercase, 1 lowercase and min length 5 charator'}).required("Insert Password"),
    hotelname : YUP.string().required("Insert Your Hotel/Property Name"),
    repass : YUP.string().oneOf([YUP.ref('password')], "Password and Confirm Password Should be same").required("Insert Your Re-Password"),
    address : YUP.string().required("Insert Your Full Address"),
    state : YUP.string().required("Select Your State"),
    city : YUP.string().required("Select Your City"),
    contact : YUP.number().typeError("Insert Valid Numbers Only").min(1000000000, "Insert Min 10 Numbers").max(9999999999, "Insert Min 10 Numbers").required("Insert Your Contact Number"),
    
});

export default owerSchema;