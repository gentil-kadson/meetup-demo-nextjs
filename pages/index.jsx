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
    image: "http://comoprojetar.com.br/wp-content/uploads/2017/08/http-static.srcdn_.comwp-contentuploads201611starwars-tatooine-twin-suns.jpg",
    address: "Some address 5, 6789 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// you should only use getServerSideProps when you need access to the request body and need to reload the page instantly every second, because then it'll be accurate when handling a lot of requests.

// export async function getServerSideProps(context) {
//   const req = context.req; // can work with req.body as in Express, for example.
//   const res = context.res;

//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUUPS
//     }
//     // validade won't be available here because Next'll already fetch the data when the server receives a new request.
//   }
// }

export async function getStaticProps() {
  // fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUUPS
    },
    revalidate: 1
  }
}

export default HomePage;
