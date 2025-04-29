// Päätiedosto jossa yhdistetään muut tiedostot ja halitaan osallistujien lisäämisen, poistamisen, lajittelun ja sekoituksen

// Tarvittavat importit
import styled from 'styled-components';

// Tuodaan loput tiedostot pää tiedostoon
import {Osallistujat} from './Osallistujat';
import {Kysymys} from './Kysymys';
import {Pyora} from './Pyora';
import {Otsikko} from './Otsikko';

// Viten mukana tulleiden tiedostojen importit
import './App.css';
import {useState} from 'react';

// Sivun omat ulkonäkö muutokset
const Main = styled.main`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #050513;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

// Ohjelman päätiedoston luonti
export const MAX_PARTICIPANTS = 100; // Laittaa osallistuja rajan 100

// Halitaan ossalistujien nimien lisäämistä, poistamista, lajittelua ja sekoitusta
function App() {
  const [names, setNames] = useState<string[]>([]);

  // Osallistujien lisäämisen hallinta
  const lisääOsallistuja = (name: string) => {
    if (names.length < MAX_PARTICIPANTS) {
      setNames([...names, name]);
    }
  };

  // Osallistujien poiston hallinta
  const poistaOsallistuja = (index: number) => {
    setNames(names.filter((_, i) => i !== index));
  };

  // Osallistujien sekoitus randomisti
  const sekoitaOsallistujat = () => {
    const shuffledNames = [...names].sort(() => Math.random() - 0.5);
    setNames(shuffledNames);
  };

  // Osallistujien lajittelu aakkos järjestykseen
  const lajitteleOsallistujat = () => {
    const sortedNames = [...names].sort((a,b) => a.localeCompare(b));
    setNames(sortedNames);
  };

  // Tuodaan muut komponentit tiedostoon
  return (
    <>
      <Otsikko />
      <Kysymys />
      <Main>
        <Osallistujat
          handleAddName={lisääOsallistuja}
          handleRemoveName={poistaOsallistuja}
          shuffleNames={sekoitaOsallistujat}
          sortNames={lajitteleOsallistujat}
          names={names}
        />
        <Pyora participants={names} />
      </Main>
    </>
  );
}

export default App;