import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "http://comoprojetar.com.br/wp-content/uploads/2017/08/http-static.srcdn_.comwp-contentuploads201611starwars-tatooine-twin-suns.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://thenexus.one/storage/2022/04/Star-Wars-Coruscant.jpg",
    address: "Some address 5, 6789 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUUPS} />;
}

export default HomePage;
