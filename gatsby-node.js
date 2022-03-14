


// exports.createPages = async ({ actions: {createPage}, graphql}) =>{
//     const data = await graphql(`
//     {
//         allBlogJson{
//             edges{
//                 node{
//                     slug
//                 }
//             }
//         }
//     }`)

//     if (data.errors) {
//         console.log("Error Retreiving Data", data.errors)
//         return
//     }

//     const blogTemplate = require.resolve("./src/views/Blog/Blog1.js")
//     data.data.allBlogJson.edges.forEach(edge => {
//         createPage({
//             path: `/blog/${edge.node.slug}/`,
//             component: blogTemplate,
//             context: {
//                 slug: edge.node.slug,
//             },
//         })
//     })
// }