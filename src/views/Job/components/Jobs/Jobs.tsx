// import React, { useEffect, useState } from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { useStaticQuery, graphql } from 'gatsby';
// import { Link } from 'gatsby';
// // export const mock = [
// //   {
// //     title: 'Front-End Developer',
// //     location: 'Madrid',
// //     type: 'Remote',
// //     team: 'Consumer',
// //     subtitle: 'Responsible for design systems and brand management.',
// //   },
// //   {
// //     title: 'Community Manager',
// //     location: 'Paris',
// //     type: 'Full time',
// //     team: 'Consulting',
// //     subtitle: 'Responsible for creating life in our apps.',
// //   },
// //   {
// //     title: 'UX/UI Designer',
// //     location: 'Yerevan',
// //     type: 'Part time',
// //     team: 'Internal tools',
// //     subtitle: 'Help us make the best decisions with qualitative experiments.',
// //   },
// //   {
// //     title: 'Front-End Developer',
// //     location: 'Madrid',
// //     type: 'Remote',
// //     team: 'Internal tools',
// //     subtitle: 'Responsible for design systems and brand management.',
// //   },
// //   {
// //     title: 'Community Manager',
// //     location: 'Paris',
// //     type: 'Full time',
// //     team: 'Consulting',
// //     subtitle: 'Responsible for creating life in our apps.',
// //   },
// //   {
// //     title: 'UX/UI Designer',
// //     location: 'Yerevan',
// //     type: 'Part time',
// //     team: 'Consumer',
// //     subtitle: 'Help us make the best decisions with qualitative experiments.',
// //   },
// //   {
// //     title: 'Front-End Developer',
// //     location: 'Madrid',
// //     type: 'Remote',
// //     team: 'Consumer',
// //     subtitle: 'Responsible for design systems and brand management.',
// //   },
// //   {
// //     title: 'Community Manager',
// //     location: 'Paris',
// //     type: 'Full time',
// //     team: 'Consulting',
// //     subtitle: 'Responsible for creating life in our apps.',
// //   },
// // ];

// const Jobs = (): JSX.Element => {
//   const theme = useTheme();
//   const data = useStaticQuery(graphql`
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
//   const [roleFilter, setRoleFilter] = useState();
//   const [locationFilter, setLocationFilter] = useState();
//   const [roles, setRoles] = useState([]);
//   const [filterCopyData, SetFilterCopyData] = useState([]);
//   const [orignalData, SetOrignalData] = useState([]);
//   const [jobArray, setJobArray] = useState([]);
//   const [location, setLocation] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [featureData, setFeatureData] = useState([]);
//   const jobData = [];
//   const jobRoles = [];
//   let jobLocation = [];
//   const feature = [];
//   const filterDataHandleRole = (event) => {
//     let filterData = orignalData;
//     setRoleFilter(event.target.value);
//     if (event.target.value === 'AllRoles') {
//       setJobArray(orignalData);
//       setRoleFilter(null);
//       if (locationFilter) {
//         filterData = filterData.filter((item) => {
//           return item.Job_Location
//             ? item.Job_Location.city === locationFilter
//             : null;
//         });
//         setJobArray(filterData);
//       }
//     } else {
//       filterData = filterData.filter((item) => {
//         return item.Job_Roles === event.target.value;
//       });
//       setJobArray(filterData);
//       if (locationFilter) {
//         filterData = filterData.filter((item) => {
//           return item.Job_Location
//             ? item.Job_Location.city === locationFilter
//             : null;
//         });
//         setJobArray(filterData);
//       }
//     }
//   };

//   const filterDataHandleLocation = (event) => {
//     console.log('filter value is', event);
//     setLocationFilter(event.target.value);
//     let filterData = orignalData;
//     if (event.target.value === 'AllLocations') {
//       setJobArray(orignalData);
//       setLocationFilter(null);

//       if (roleFilter) {
//         filterData = filterData.filter((item) => {
//           return item.Job_Roles === roleFilter;
//         });
//         setJobArray(filterData);
//       }
//     } else {
//       filterData = filterData.filter((item) => {
//         return item.Job_Location
//           ? item.Job_Location.city === event.target.value
//           : null;
//       });
//       if (roleFilter) {
//         filterData = filterData.filter((item) => {
//           return item.Job_Roles === roleFilter;
//         });
//       }
//       setJobArray(filterData);
//     }
//   };
//   useEffect(() => {
//     setLoading(false);

//     const makeData = () => {
//       console.log('data is ', data.allMdx.edges);
//       data.allMdx.edges.map((item) => {
//         jobData.push(item.node.frontmatter);
//         jobRoles.push(item.node.frontmatter.Job_Roles);
//         jobLocation.push(
//           item.node.frontmatter.Job_Location
//             ? item.node.frontmatter.Job_Location.city
//             : null,
//         );
//         if (item.node.frontmatter.Priority === true) {
//           feature.push(item.node.frontmatter);
//         }
//       });

//       setJobArray(jobData);
//       SetFilterCopyData(jobData);
//       SetOrignalData(jobData);
//       setRoles(jobRoles);
//       jobLocation = [...new Set(jobLocation)];
//       setLocation(jobLocation);
//       setFeatureData(feature);
//     };
//     makeData();
//   }, []);

//   useEffect(() => {
//     if (jobArray[1]) {
//       console.log('second useeffecct called', jobArray);

//       console.log('second useeffecct called', roles);

//       console.log('second useeffecct called', location);
//       console.log('featured job', featureData);
//       setLoading(true);
//     }
//   }, [jobArray]);
//   return (
//     <Box>
//       {loading === false ? null : (
//         <>
//           <Box marginBottom={4}>
//             <Typography
//               align={'center'}
//               color={'text.secondary'}
//               sx={{ textTransform: 'uppercase' }}
//               variant={'subtitle2'}
//               fontWeight={600}
//             >
//               Open positions
//             </Typography>
//             <Typography fontWeight={700} variant={'h4'} align={'center'}>
//               Current job openings
//             </Typography>
//           </Box>
//           <Grid
//             container
//             justifyContent="center"
//             spacing={4}
//             sx={{
//               '.MuiOutlinedInput-root': {
//                 background: theme.palette.background.paper,
//               },
//             }}
//           >
//             <Grid item xs={12} md={4}>
//               <FormControl variant="outlined" sx={{ minWidth: 1 }}>
//                 <InputLabel id="career-listing__jobs-role--label">
//                   Roles
//                 </InputLabel>
//                 <Select
//                   labelId="career-listing__jobs-role--label"
//                   label="Roles"
//                   name="Role"
//                   onChange={filterDataHandleRole}
//                 >
//                   <MenuItem value="AllRoles">
//                     <em>All roles</em>
//                   </MenuItem>
//                   {roles.map((item, index) => {
//                     return item ? (
//                       <MenuItem key={index} value={`${item}`}>
//                         {item}
//                       </MenuItem>
//                     ) : null;
//                   })}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <FormControl variant="outlined" sx={{ minWidth: 1 }}>
//                 <InputLabel id="career-listing__jobs-role--label">
//                   Locations
//                 </InputLabel>
//                 <Select
//                   labelId="career-listing__jobs-role--label"
//                   label="Locations"
//                   name="Location"
//                   onChange={filterDataHandleLocation}
//                 >
//                   <MenuItem value="AllLocations">
//                     <em>All locations</em>
//                   </MenuItem>
//                   {location.map((item, index) => {
//                     return (
//                       <MenuItem key={index} value={`${item}`}>
//                         {item}
//                       </MenuItem>
//                     );
//                   })}
//                 </Select>
//               </FormControl>
//             </Grid>
//           </Grid>
//           <Box
//             display={'flex'}
//             flexDirection={{ xs: 'column', sm: 'row' }}
//             flex={'1 1 100%'}
//             justifyContent={{ sm: 'space-between' }}
//             alignItems={{ xs: 'flex-start', sm: 'center' }}
//             marginY={4}
//           >
//             <Box marginBottom={{ xs: 1, sm: 0 }}>
//               <Typography variant={'h6'} fontWeight={700}>
//                 {featureData[0].job_title}
//               </Typography>
//               <Typography color={'text.secondary'}>
//                 {`${featureData[0].job_title} are top priorities at Kodifly.`}
//               </Typography>
//             </Box>
//             <Box
//               paddingY={1 / 2}
//               paddingX={1}
//               bgcolor={'secondary.main'}
//               borderRadius={2}
//               marginRight={1}
//             >
//               <Typography
//                 variant={'caption'}
//                 fontWeight={700}
//                 sx={{ color: 'common.black' }}
//               >
//                 {jobArray.length} openings
//               </Typography>
//             </Box>
//           </Box>
//           <Grid
//             container
//             sx={{
//               background: theme.palette.background.paper,
//               borderRadius: 2,
//             }}
//           >
//             {jobArray.map((item, i) => (
//               <Grid
//                 item
//                 xs={12}
//                 key={i}
//                 sx={{
//                   borderBottom: `1px solid ${theme.palette.divider}`,
//                   '&:last-child': {
//                     borderBottom: 0,
//                   },
//                 }}
//               >
//                 <Box padding={2} display={'flex'} alignItems={'center'}>
//                   <Box
//                     display={'flex'}
//                     flexDirection={{ xs: 'column', sm: 'row' }}
//                     flex={'1 1 100%'}
//                     justifyContent={{ sm: 'space-between' }}
//                     alignItems={{ sm: 'center' }}
//                   >
//                     <Box marginBottom={{ xs: 1, sm: 0 }}>
//                       <Typography variant={'subtitle1'} fontWeight={700}>
//                         {item.job_title}
//                       </Typography>
//                       <Typography color={'text.secondary'}>
//                         {item.date}
//                       </Typography>
//                     </Box>
//                     <Typography color={'text.secondary'}>
//                       {item.Job_Location ? (
//                         <>{`${item.Job_Location.city}`}</>
//                       ) : null}
//                     </Typography>
//                   </Box>
//                   <Link
//                     to={`/jobdetails`}
//                     state={item}
//                     style={{ textDecoration: 'none' }}
//                   >
//                     <Box marginLeft={2}>
//                       <Button
//                         variant="outlined"
//                         color="primary"
//                         size="small"
//                         endIcon={
//                           <Box
//                             component={'svg'}
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                             width={12}
//                             height={12}
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                               clipRule="evenodd"
//                             />
//                           </Box>
//                         }
//                       >
//                         Apply
//                       </Button>
//                     </Box>
//                   </Link>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </>
//       )}
//     </Box>
//   );
// };

// export default Jobs;
