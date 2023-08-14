import style from "./page.module.css";
export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className={style.about}>
      <h1>요즘 인기 영화</h1>
      <p>Next.js 실습용으로 제작한 요즘 인기 영화 목록 서비스 입니다.</p>
      <ul>
        <li>Skill: Next.js 13(13.4.12)</li>
        <li>API: TMBD</li>
      </ul>
    </div>
  );
}
