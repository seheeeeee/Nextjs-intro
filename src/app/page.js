import Link from "next/link";
import style from "./_styles/page.module.css";
// server-side rendering page.
// styled-jsx 사용 X, client-side에서만 사용가능.
// seo 최적화 페이지에서는 csr보다 ssr이 이점이 있음.
async function getMovies() {
  //12버전 getServerSideProps() 대체
  const { results } = await (
    await fetch("http://localhost:3000/api/movies", { cache: "no-store" })
  ).json();

  return {
    results,
  };
}
export default async function Home() {
  const { results } = await getMovies();
  return (
    <>
      <div className={style.container}>
        {results?.map((movie) => {
          return (
            <Link
              href={`/movies/${movie.original_title}/${movie.id}`}
              key={movie.id}
              as={`/movies/${movie.original_title}/${movie.id}`}
            >
              <div className={style.movie}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                />
                <h4>{movie.original_title}</h4>
              </div>
            </Link>
          );
        })}
      </div>
      {/* <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style> */}
    </>
  );
}
