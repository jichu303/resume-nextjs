import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/free-icon-user-18775840.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '하지수',
    small: '(지츄)',
  },
  contact: [
    {
      title: '2261057@pcu.ac.kr',
      link: 'mailto:tux@linux.org',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/jichu303/resume-nextjs.git',
      icon: faGithub,
    },
  ],
  notice: {
    title: '현재 배재대학교 4학년 재학중이며, 컴퓨터공학과 전공 중입니다.',
    icon: faBell,
  },
};

export default profile;
