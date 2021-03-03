import { useQuery, gql } from '@apollo/client';

const LAUNCHES_QUERY = gql`
  query LauncesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { data, error, loading } = useQuery(LAUNCHES_QUERY);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (error) {
    console.log(error);
  }

  console.log(data);

  return (
    <>
      <div>
        <h1 className="display-4 my-3">Launches</h1>
      </div>
    </>
  );
};

export default Launches;
