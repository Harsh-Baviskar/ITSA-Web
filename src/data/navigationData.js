import {
  Rocket01Icon,
  Calendar01Icon,
  Layers01Icon,
  CodeIcon,
  UserGroupIcon,
  InformationCircleIcon,
  Award01Icon,
  Mail01Icon,
  SourceCodeSquareIcon
} from '@hugeicons/core-free-icons';

export const itsaMenuItems = [
  {
    label: 'Explore ITSA',
    children: [
      { value: 'about', label: 'About Us', icon: InformationCircleIcon },
      { value: 'vision', label: 'Vision & Mission', icon: Rocket01Icon }
    ]
  },
  {
    label: 'Activities',
    children: [
      { value: 'events', label: 'Flagship Events', icon: Calendar01Icon },
      { value: 'achievements', label: 'Achievements', icon: Award01Icon }
    ]
  },
  {
    label: 'Community & Us',
    children: [
      { value: 'team', label: 'Our Team', icon: UserGroupIcon },
      { value: 'socials', label: 'Us on Socials', icon: SourceCodeSquareIcon },
      { value: 'contact', label: 'Get in Touch', icon: Mail01Icon }
    ]
  }
];
