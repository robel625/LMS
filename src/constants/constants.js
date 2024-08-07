const onboarding_screens = [
    {
        id: 1,
        image: require('../assets/images/cap-graduation-ceremony.png'),
        title: "Start Learning With Z-Secret Training Institute",
        desc: "Explore a variety of interactive lesson, video, quizze & assignment."
    },
    {
        id: 2,
        image: require('../assets/images/learning-video.png'),
        title: "Learning videos",
        desc: "Our engaging learning videos will spark your curiosty & enjoyable"
    },
    {
        id: 3,
        image: require('../assets/images/boy-exam.png'),
        title: "Look at past exam papers",
        desc: "One of the most effective ways to prepare for exams is to practice taking past versions. This helps you get used to the format of the questions"
    }
]

const login = "LOGIN"
const register = "REGISTER"
const forgot_password = "FORGOT_PASSWORD"




// from LMS

const register_options = [
    {
        id: 0,
        label: "STUDENT"
    },
    {
        id: 1,
        label: "TUTOR"
    }
]

const walkthrough = [
    {
        id: 0,
        title: "Explore Online Courses",
        sub_title: "All types of educational & professional courses available online.",
        image: require("../assets/images/work.png")
    },
    {
        id: 1,
        title: "Explore Online Courses",
        sub_title: "All types of educational & professional courses available online.",
        image: require("../assets/images/work.png")
    },
    {
        id: 2,
        title: "Explore Online Courses",
        sub_title: "All types of educational & professional courses available online.",
        image: require("../assets/images/work.png")
    },
]

const categories = [
    {
        id: 0,
        label: "Mobile Design",
        icon: require("../assets/icons/mobile.png")
    },
    {
        id: 1,
        label: "3D Modeling",
        icon: require("../assets/icons/model_3d.png")
    },
    {
        id: 2,
        label: "Web Designing",
        icon: require("../assets/icons/web_design.png")
    },
    {
        id: 3,
        label: "Illustrations",
        icon: require("../assets/icons/illustration.png")
    },
    {
        id: 4,
        label: "Drawing",
        icon: require("../assets/icons/drawing.png")
    },
    {
        id: 5,
        label: "Animation",
        icon: require("../assets/icons/animation.png")
    },
    {
        id: 6,
        label: "Education",
        icon: require("../assets/icons/education.png")
    },
    {
        id: 7,
        label: "Networking",
        icon: require("../assets/icons/networking.png")
    },
    {
        id: 8,
        label: "Coding",
        icon: require("../assets/icons/coding.png")
    },
]

const screens = {
    home: "Home",
    search: "Search",
    profile: "Profile"
}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
        icon: require("../assets/icons/home.png")
    },
    {
        id: 1,
        label: screens.search,
        icon: require("../assets/icons/search.png")
    },
    {
        id: 2,
        label: screens.profile,
        icon: require("../assets/icons/profile.png")
    }
]

const class_types = [
    {
        id: 0,
        label: "All",
        icon: require("../assets/icons/all.png")
    },
    {
        id: 1,
        label: "Staff Pick",
        icon: require("../assets/icons/staff_pick.png")
    },
    {
        id: 2,
        label: "Original",
        icon: require("../assets/icons/original.png")
    },
]

const class_levels = [
    {
        id: 0,
        label: "Beginner"
    },
    {
        id: 1,
        label: "Intermediate"
    },
    {
        id: 2,
        label: "Advanced"
    }
]

const created_within = [
    {
        id: 0,
        label: "All Time"
    },
    {
        id: 1,
        label: "This Month"
    },
    {
        id: 2,
        label: "This Week"
    },
    {
        id: 3,
        label: "This Day"
    },
    {
        id: 4,
        label: "2 Months"
    },
    {
        id: 5,
        label: "4 Months"
    }
]

const course_details_tabs = [
    {
        id: 0,
        label: "Chapters",
    },
    {
        id: 1,
        label: "Files",
    },
    {
        id: 2,
        label: "Discussions",
    }
]

const ALL_Units_Option = [
    {
        id: 0,
        label: "All",
    },
    {
        id: 1,
        label: "Units",
    }
]

export default {
    register_options,
    walkthrough,
    categories,
    screens,
    bottom_tabs,
    class_types,
    class_levels,
    created_within,
    course_details_tabs,
    ALL_Units_Option,


    // from auth & onboarding
    onboarding_screens,
    login,
    register,
    forgot_password
}

