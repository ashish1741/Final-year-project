import DashboardIcon from '@mui/icons-material/Dashboard';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

export const navLinks = [
    {
        name:"Home",
        url : "/home"
    },
    {
        name:"Course",
        url : "/course"
    },
    {
        name:"Forums",
        url : "/Forums"
    },
    {
        name:"Tools",
        url : "/tools"
    },


]

export const LearnerDashboardItems = [
    {
        id: 1,
        name: "Dashboard",
        url: "/learner-dashboard",
        icon: 'DashboardIcon' // String representation of the icon name
    },
    {
        id: 2,
        name: "Course",
        url: "/",
        icon: 'VideoLibraryIcon' // String representation of the icon name
    },
];

export const creatorDashboardItems= [
    {
        name:"Dashboard",
        url:"",

    },
   
    {
        name:"Analytics",
        url:"analytics",
        
    },
    {
        name:"Create Course",
        url:"create-course",
        
    },
    {
        name:" Course Management",
        url:"courseManagement",

    },
    {
        name:"Settings and Profile",
        icon:"",

    },

]