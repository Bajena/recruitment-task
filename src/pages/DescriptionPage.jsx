export default function DescriptionPage() {
  return (
    <>
      <p className="section-container__description">App description</p>
      <hr className="section-container__separator" />
      <p>
        Napisz aplikację korzystając z najnowszego api react.js (hooki, Context,
        itd.) spełniającą poniższe założenia. Aplikacja ma się składać z minimum
        3 ekranów:
      </p>
      <ol>
        <li>Wyszukiwarka projektów githubowych</li>
        <li>Założenia całej aplikacji</li>
        <li>Wyliczanie silni</li>
      </ol>
      <p>Ad 1:</p>
      <ul>
        <li>Wykorzystane jest publiczne API Githuba;</li>
        <li>
          Czeka na podanie loginu użytkownika:
          <ul>
            <li>waliduje poprawność;</li>
            <li> obsługuje nieistniejące loginy;</li>
          </ul>
        </li>
        <li>
          wyświetla maksymalnie 5 projektów w kolejności od ostatnio
          updatowanego:
          <ul>
            <li>wyświetla maksymalnie 5 commitów każdego z projektów;</li>
          </ul>
        </li>
      </ul>
      <p>Ad 2:</p>
      <ul>
        <li>
          wyświetla niniejszą treść (listę wymagań) z podobnym (takim samym)
          podziałem i układem;
        </li>
        <li>proszę zawrzeć też autora aplikacji - własne imię i nazwisko;</li>
      </ul>
      <p>Ad 3:</p>
      <ul>
        <li>input do podania liczby dla której będzie wyliczona silnia;</li>
        <li>historia poprzednich wyliczeń.</li>
      </ul>
      <p>Ogólne:</p>
      <ul>
        <li>
          korzysta z <strong>LESS / SASS</strong>. Spełnia wymogi{' '}
          <strong>BEM</strong>. Jest też <strong>estetyczna</strong>;
        </li>
        <li>
          wyświetla <strong>co drugi</strong> element każdej listy wyróżnionym
          kolorem;
        </li>
        <li>
          jest <strong>hostowana</strong> (github pages, heroku, itd..), a jej
          kod jest dostępny <strong>publicznie</strong>;
        </li>
      </ul>
      <p>Miło widziane użycie middlewarów reduxowych.</p>
    </>
  );
}
