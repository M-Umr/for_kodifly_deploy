import React ,{useEffect}from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Breadcrums from './components/Breadcrums';
import Hero from './components/Hero';
import BlogSection from './components/BlogSection';
import CtaCenter from './components/CtaCenter';
import {useStaticQuery, graphql} from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";


import SearchBox from './components/SearchBox';
const Blog = (): JSX.Element => {
//   const data = useStaticQuery(graphql`
//   query BlogQuery {
//     allMdx {
//       nodes {
//         frontmatter {
//           blog_title
//           Author {
//             author_Image
//             author_name
//           }
//           Blog_Body {
//             Title
//             blog_body_description
//             blogGalleryImages {
//               alt
//               blog_image
//             }
//           }
//           blog_description
//           main_page_tags
//           media
//           search_tags
//         }
//       }
//     }
//   }`);



//   const blogArray = [];
// useEffect(() => {
//   console.log("useEffeect called",data);
  
//    //data.blogJson.map((iteem,index)=>{console.log("check query item ",iteem)})

 
// })

return (<>
  
    <Main colorInvert={true}>
      {/* <Breadcrums></Breadcrums> */}
      <Hero />
      <Container
        sx={{
          marginTop: '-5rem',
          position: 'relative',
          zIndex: 3,
          paddingY: '0 !important',
        }}
      >
        <SearchBox />
      </Container>
      <Container>
        <BlogSection />
        <CtaCenter />
      </Container>
    </Main>
    </>
  );
};

export default Blog;
