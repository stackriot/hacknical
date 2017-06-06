import locales from 'LOCALES';

const resumeTexts = locales("resume");
const navTexts = resumeTexts.navs;
const genderTexts = resumeTexts.options.genders;
const eduTexts = resumeTexts.options.edus;

export const RESUME_SECTIONS = [
  {
    id: 'info',
    text: navTexts.info
  },
  {
    id: 'educations',
    text: navTexts.edu
  },
  {
    id: 'workExperiences',
    text: navTexts.work
  },
  {
    id: 'personalProjects',
    text: navTexts.projects
  },
  {
    id: 'others',
    text: navTexts.others
  }
];

export const GENDERS = [
  {
    id: 'male',
    value: genderTexts.male
  },
  {
    id: 'female',
    value: genderTexts.female
  }
];

export const EDUCATIONS = [
  {
    id: 'highSchool',
    value: eduTexts.highSchool
  },
  {
    id: 'college',
    value: eduTexts.college
  },
  {
    id: 'devTraining',
    value: eduTexts.devTraining
  },
  {
    id: 'other',
    value: eduTexts.other
  }
];

export const SOCIAL_LINKS = [
  {
    name: 'github',
    icon: 'github.png',
    url: ''
  },
  {
    name: 'website',
    text: 'Personal website',
    icon: 'gold.jpeg',
    url: ''
  },
  {
    name: 'blog',
    text: 'Blog link',
    icon: 'blog.png',
    url: ''
  },
  {
    name: 'stackoverflow',
    icon: 'stackoverflow.png',
    url: ''
  }
];
export const LINK_NAMES = {
  github: 'github',
  website: 'website',
  blog: 'blog',,
  stackoverflow: 'stackoverflow'
};

export const INFO = {
  name: '',
  email: '',
  phone: '',
  gender: 'male',
  location: '',
  avatar: '',
  intention: ''
};

export const EDU = {
  school: '',
  major: '',
  education: EDUCATIONS[0].id,
  startTime: '',
  endTime: '',
};

export const WORK_EXPERIENCE = {
  company: '',
  url: '',
  startTime: '',
  endTime: '',
  position: '',
  projects: []
};

export const WORK_PROJECT = {
  name: '',
  url: '',
  details: []
};

export const PERSONAL_PROJECT = {
  url: '',
  desc: '',
  title: '',
  techs: []
};

export const OTHERS = {
  expectLocation: '',
  expectLocations: [],
  expectSalary: '',
  dream: '',
  supplements: [],
  socialLinks: [...SOCIAL_LINKS]
};
