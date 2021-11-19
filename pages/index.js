import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    title: 'A First Meetup',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    title: 'A Second Meetup',
    address: 'Some address 20, 54321 Some City',
    description: 'This is a second meetup!',
  },
];

function HomePage(params) {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
