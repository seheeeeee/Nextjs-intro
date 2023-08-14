import style from "./page.module.css";
export async function generateMetadata({ params }) {
  // read route params
  const [title, id] = params.params;

  return {
    title,
  };
}
async function getDetail(id) {
  //12버전 getServerSideProps() 대체

  const response = await (
    await fetch(`http://localhost:3000/api/movies/${id}`, {
      cache: "no-store",
    })
  ).json();
  return {
    response,
  };
}
export default async function Detail(ctx) {
  const [title, id] = ctx.params.params;
  const decodeTitle = decodeURIComponent(title);
  const { response } = await getDetail(id);
  const { poster_path, homepage, release_date, overview, genres } = response;
  const genresStr = genres.map((g) => g.name).join(", ");

  return (
    <div>
      <h4 className={style.title}>{decodeTitle}</h4>
      <div className={style.flip}>
        <div className={style.card}>
          <img
            className={style.front}
            src={`http://localhost:3000/api/images/${poster_path}`}
            alt="포스터 앞면"
          />
          <ul className={style.back}>
            <li>{overview}</li>
            <li>Release date: {release_date.replaceAll("-", ".")}</li>
            <li>
              Homepage:{" "}
              <a href={homepage} target="_blank">
                {homepage}
              </a>
            </li>
            <li>Genres: {genresStr}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
