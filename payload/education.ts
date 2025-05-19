import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'University',
      subTitle: 'computer science and engineering',
      startedAt: '2022-03',
      // endedAt: '2010-02',
    },
    {
      title: 'High School',
      subTitle: 'Graduated',
      startedAt: '2018-03',
      endedAt: '2021-02',
    },
  ],
};

export default education;
