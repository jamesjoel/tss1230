import * as YUP from 'yup';

let userLoginSchema = YUP.object({
    
    email : YUP.string().email("This Email Id is Not correct").required("Insert Email Id"),
    password : YUP.string().required("Insert Your Password"),
    
    
});

export default userLoginSchema;