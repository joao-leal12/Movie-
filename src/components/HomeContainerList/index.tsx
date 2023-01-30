import { MoviesList } from '../MoviesList';
// import { GET_MOVIES } from '../../utils/API/API_ROUTES';
export const HomeContainerList = () => {
  // const { setDataMovies } = useContextCreate();

  // const [page, setPage] = useState(1);
  // const observer = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const intersectOb = new IntersectionObserver((entries) => {
  //     if (entries.some((entry) => entry.isIntersecting)) {
  //       let wait = false;
  //       if (page <= 5 && !wait) {
  //         setCount([...count, count.length + 1]);
  //         setLoad(true);
  //         // setPage(page + 1);
  //         wait = true;
  //         setTimeout(() => {
  //           wait = false;
  //         }, 500);
  //       }
  //       if (count.length === 5) {
  //         setLoad(false);
  //       }
  //     }
  //   });
  //   if (observer.current != null) intersectOb.observe(observer.current);

  //   return () => {
  //     intersectOb.disconnect();
  //   };
  // }, [count]);

  return (
    <>
      {/* {count.map((count) => (
        <MoviesList
          page={page}
          loading={loading}
          key={count}
          load={load}
          observer={observer}
        />
      ))} */}

      <MoviesList />
      <MoviesList page="2" />
      <MoviesList page="3" />
    </>
  );
};
