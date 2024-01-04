interface ToggleDataItem {
  required: boolean;
  label: string;
  description: string;
  key: string;
}

type ToggleData = ToggleDataItem[];

const toggleData: ToggleData = [
  {
    required: true,
    label: 'Strictly necessary (always on)',
    description:
      'Essential for the basic functionality of a website.',
    key: 'necessary',
  },
  {
    required: false,
    label: 'Functional',
    description:
      'Helps to enhance user experience by remembering user preferences and choices.',
    key: 'functional',
  },
  {
    required: false,
    label: 'Performance',
    description:
      'Collects data on how users interact with a website to improve its performance and usability.',
    key: 'performance',
  },
  {
    required: false,
    label: 'Marketing',
    description:
      'Used for tracking user behavior and providing personalized content and advertisements based on their interests and browsing habits.',
    key: 'marketing',
  },
];

export default toggleData;
