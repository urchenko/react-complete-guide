import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <MeetupDetail
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://max:qwerty12@cluster0.sknfp.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetupsIds = await meetupsCollection.find({}, { _id: 1 }).toArray();

  console.log('meetupIds: ', meetupsIds);

  client.close();

  return {
    fallback: false,
    paths: meetupsIds.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single mitup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://max:qwerty12@cluster0.sknfp.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({}, { _id: ObjectId(meetupId) });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
      // {
      //   image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
      //   id: meetupId,
      //   title: 'A Second Meetup',
      //   address: 'Some address 20, 54321 Some City',
      //   description: 'This is a second meetup!',
      // },
    },
  };
}

export default MeetupDetails;
