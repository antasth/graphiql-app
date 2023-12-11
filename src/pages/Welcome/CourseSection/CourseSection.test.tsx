import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CourseSection from './CourseSection';

describe('Course Section tests', () => {
  test('Must headings elements', () => {
    const { getByText } = render(<CourseSection />, { wrapper: MemoryRouter });
    const courseSectionHeading = getByText('Introducing RSSchool React Course');
    const courseSectionSubheading = getByText(
      'This project was completed as a part of RSSchool React Course'
    );
    expect(courseSectionHeading).toBeInTheDocument();
    expect(courseSectionSubheading).toBeInTheDocument();
  });
});
