import React,{useEffect} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Job from 'views/Job';

const new_page = (): JSX.Element => {
//     const data = useStaticQuery(graphql`
//     query JobQuery {
//         allMdx {
//             edges {
//               node {
//               frontmatter {
//                 working_hours
//                 salary
//                 place_of_work
//                 job_title
//                 job_requirements
//                 job_notes
//                 Job_Location {
//                   country
//                   city
//                 }
//                 job_duties
//                 job_description
//                 job_benefits
//                 apply_info
//                 Priority
//                 Job_Type
//                 Job_Roles
//                 Job_Highlights
//                 date
//               }
//               id
//             }
//             }
//           }
//     }
//   `);
//   const blogArray = [];
// useEffect(() => {
//   console.log("useEffeect called",data);
  
//    //data.blogJson.map((iteem,index)=>{console.log("check query item ",iteem)})

 
// })
  return <>Hello </>;
};

export default new_page;