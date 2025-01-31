import img01 from "./images/img_01.jpg";
import img_02 from "./images/img_02.jpg";
import img_03 from "./images/img_03.jpg";
import img_04 from "./images/img_04.jpg";
import img_05 from "./images/img_05.jpg";
import img_06 from "./images/img_06.jpg";
import img_07 from "./images/img_07.jpg";
import img_08 from "./images/img_08.jpg";
import img_09 from "./images/img_09.jpg";
import img_10 from "./images/img_10.jpg";
import img_11 from "./images/img_11.jpg";
import img_12 from "./images/img_12.jpg";
import img_13 from "./images/img_13.jpg";
import img_14 from "./images/img_14.jpg";
import img_15 from "./images/img_15.jpg";
import img_16 from "./images/img_16.jpg";
import img_17 from "./images/img_17.jpg";
import img_18 from "./images/img_18.jpg";
import img_19 from "./images/img_19.jpg";
import img_20 from "./images/img_20.jpg";

const slides = [
  {
    id: 1,
    img: img01,
    description: `The Union of Soviet Socialist Republics (USSR) is officially established on December 30. 
The Treaty, along with the Declaration of the Creation of the USSR, was approved on this date by a conference of delegations from the Russian SFSR, the Transcaucasian SFSR, the Ukrainian SSR, and the Byelorussian SSR.`,
    title: "Formation_of_the_USSR",
    date: "1922",
  },
  {
    id: 2,
    img: img_02,
    description: `Vladimir Lenin, leader of the October Revolution and the first leader and founder of the Soviet Union, dies in Gorki aged 53 after falling into a coma. The official cause of death was recorded as an incurable disease of the blood vessels. Joseph Stalin begins consolidating power following Lenin's death.`,
    title: "Death of Lenin",
    date: "1924",
  },
  {
    id: 3,
    img: img_03,
    description: `Stalin implements the First Five-Year Plan, focused on rapid industrialization and collectivization. The plan was created to initiate large-scale industrialization across the USSR and began on October 1, 1928.`,
    title: "First Five-Year Plan",
    date: "1928",
  },
  {
    id: 4,
    img: img_04,
    description: `The Holodomor, also known as the Ukrainian Famine, was a human-made famine in Soviet Ukraine from 1932 to 1933 that killed millions of Ukrainians. It was part of the wider Soviet famine of 1930–1933 affecting major grain-producing areas of the Soviet Union.`,
    title: "Holodomor Famine",
    date: "1932-1933",
  },
  {
    id: 5,
    img: img_05,
    description: `The Great Purge (1936–1938), also known as the Great Terror, was a campaign led by Stalin targeting political rivals, intellectuals, and military leaders through arrests and executions. It aimed to consolidate Stalin's power and remove Leon Trotsky's influence within the Soviet Union.`,
    title: "Great Purge Begins",
    date: "1934",
  },
  {
    id: 6,
    img: img_06,
    description: `In August 1939, Germany and the Soviet Union signed the Molotov-Ribbentrop Pact, a non-aggression agreement. The pact included secret protocols dividing Eastern Europe into spheres of influence between the two powers.`,
    title: "Molotov-Ribbentrop Pact",
    date: "1939",
  },
  {
    id: 7,
    img: img_07,
    description: `On May 8, 1945, known as Victory in Europe Day (V-E Day), Germany unconditionally surrendered its military forces to the Allies, including the USSR. This marked the Soviet Union's emergence as a superpower after its significant role in defeating Nazi Germany.`,
    title: "Victory in World War II",
    date: "1945",
  },
  {
    id: 8,
    img: img_08,
    description: `On August 29, 1949, the USSR successfully tested its first nuclear bomb, code-named "First Lightning," at Semipalatinsk, Kazakhstan. This achievement escalated the arms race during the Cold War era.`,
    title: "First Soviet Atomic Bomb",
    date: "1949",
  },
  {
    id: 9,
    img: img_09,
    description: `Joseph Stalin, the second leader of the Soviet Union, dies on March 5, 1953, at age 74 after suffering a stroke. Following his death, Nikita Khrushchev rises to power, signaling a shift in leadership.`,
    title: "Death of Stalin",
    date: "1953",
  },
  {
    id: 10,
    img: img_10,
    description: `On February 25, 1956, Nikita Khrushchev delivers his "Secret Speech" at the 20th Party Congress, denouncing Stalin's cult of personality and oppressive policies. This marks the beginning of the De-Stalinization era in Soviet history.`,
    title: "De-Stalinization Speech",
    date: "1956",
  },
  {
    id: 11,
    img: img_11,
    description: `The Cuban Missile Crisis of October 1962 brought the US and USSR to the brink of nuclear war after the Soviet Union placed missiles in Cuba. The crisis was resolved after Khrushchev agreed to remove the missiles.`,
    title: "Cuban Missile Crisis",
    date: "1962",
  },
  {
    id: 12,
    img: img_12,
    description: `Leonid Brezhnev becomes the new leader of the USSR after Nikita Khrushchev is ousted in October 1964. The change reflects dissatisfaction with Khrushchev's domestic policies and handling of the Cuban Missile Crisis.`,
    title: "Khrushchev Ousted",
    date: "1964",
  },
  {
    id: 13,
    img: img_13,
    description: `In August 1968, Soviet tanks invaded Czechoslovakia to suppress the liberalizing reforms of the Prague Spring, marking a reaffirmation of Soviet dominance over its Eastern Bloc allies.`,
    title: "Prague Spring Crushed",
    date: "1968",
  },
  {
    id: 14,
    img: img_14,
    description: `On May 26, 1972, the USSR and the US signed the SALT I Agreement, including the Anti-Ballistic Missile Treaty and interim agreements to limit nuclear arms, reflecting a period of détente during the Cold War.`,
    title: "SALT I Agreement",
    date: "1972",
  },
  {
    id: 15,
    img: img_15,
    description: `The Soviet Union invades Afghanistan in December 1979 to support its client government, starting a costly and controversial conflict. The rebellion, supported by the US, spread across Afghanistan.`,
    title: "Soviet Invasion of Afghanistan",
    date: "1979",
  },
  {
    id: 16,
    img: img_16,
    description: `Mikhail Gorbachev becomes the Soviet leader in 1985, initiating reforms like Glasnost (openness) and Perestroika (restructuring) to revitalize the Soviet Union amid growing economic and political challenges.`,
    title: "Gorbachev Comes to Power",
    date: "1985",
  },
  {
    id: 17,
    img: img_17,
    description: `On April 26, 1986, the Chernobyl nuclear disaster in Ukraine exposes significant flaws in Soviet governance and infrastructure, leading to widespread environmental and health crises.`,
    title: "Chernobyl Disaster",
    date: "1986",
  },
  {
    id: 18,
    img: img_18,
    description: `The Revolutions of 1989 lead to the collapse of communist regimes across Eastern Europe, culminating in the fall of the Berlin Wall and signaling the decline of Soviet influence.`,
    title: "Eastern Bloc Collapses",
    date: "1989",
  },
  {
    id: 19,
    img: img_19,
    description: `In 1990, Lithuania, Latvia, and Estonia declare independence from the USSR following pro-independence election victories, marking the beginning of the Soviet Union's disintegration.`,
    title: "Baltic States Declare Independence",
    date: "1990",
  },
  {
    id: 20,
    img: img_20,
    description: `On December 25, 1991, Mikhail Gorbachev resigns, and the Soviet Union is officially dissolved, marking the end of the Cold War and the emergence of independent states like Russia.`,
    title: "Dissolution of the USSR",
    date: "1991",
  },
];

export default slides;
