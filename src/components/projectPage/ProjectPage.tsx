import {
   
   
    useParams
  } from "react-router-dom";


function ProjectPage() {
    let { id }:any = useParams();
    return (
        <div className='projectPage'>
           {id}
        </div>
    )
}

export default ProjectPage
