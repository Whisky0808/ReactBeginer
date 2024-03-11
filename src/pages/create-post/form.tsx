import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import { addDoc, collection} from 'firebase/firestore';
import { db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
    title:string;
    description:string;
}
export const CreateForm = ()=>{

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title:yup.string().required("You must add a title."),
        description:yup.string().required("You must add a description"),

    });
    const {register , handleSubmit , formState: { errors }, }
         = useForm<CreateFormData>({
        resolver:yupResolver(schema),})

    const postsRef = collection(db,"posts");

    const onCreatePost = async (data:CreateFormData)=>{
        await addDoc(postsRef,{

            // title:data.title,
            // description:data.description,
            ...data,
            username:user?.displayName,
            userId:user?.uid,
        })
        navigate("/")

    };
    return(
        <form onSubmit={handleSubmit(onCreatePost)} className="createPostForm">
            <input placeholder="Title..." {...register("title")} className="input_title"/>
            <p style={{color:"red"}} className="title_msg">{errors.title?.message}</p>
            <textarea placeholder="Description..." {...register("description")} className="input_des" />
            <p style={{color:"red"}} className="des_msg" >{errors.description?.message}</p>
            <input type="submit" className="submit_button"/>
        </form>
    )
}