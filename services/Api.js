import axios from "axios";

const {About , Course,Resources, Gallery} ={
    About:"", 
    Course:"",
    Resources:"",
    Gallery:"",

}

export const About_Api ={
    getAll : async()=>{
        const response = await axios.get(About);
        return response.data;
    }
}

export const Course_Api ={
    getAll : async()=>{
        const response = await axios.get(Course);
        return response.data;
    }
}

export const Resources_Api ={
    getAll : async()=>{
        const response = await axios.get(Resources);
        return response.data;
    }
}
export const Gallery_Api ={
    getAll : async()=>{
        const response = await axios.get(Gallery);
        return response.data;
    }
}

