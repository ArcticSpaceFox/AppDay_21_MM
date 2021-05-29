import { Redirect, useParams } from "react-router-dom";

function QuestionDetail(props: any) {
  const faqitems: Array<{
    id: number;
    title: string;
    author: string;
    description: string;
    rating: number,
    tags: Array<string>;
  }> = [
    {
      id: 1,
      title: "Was genau ist Flankencodierung?",
      author: "John Cena",
      description:
        "In der letzten Übung hat Herr Mundt uns Flankencodierung erklärt, aber ich habe es nicht ganz verstanden.",
        rating: 4,
      tags: ["RNDS", "Codierung"],
    },
    {
      id: 2,
      title: "Wie hat Cesar das noch macl verschlüsselt?",
      author: "Augustus",
      description:
        "Ich habe diese Nachricht aber kann sie nicht lesen, irgendwie verschlüsselt?",
        rating: 0,
      tags: ["RNDS", "Crypto"],
    },
    {
      id: 3,
      title: "Was soll das heißen Norbert Blum hat das P=NP Problem gelöst?!",
      author: "John Cena",
      description:
        "https://www.vice.com/de/article/evvp34/deutscher-soll-gerade-eines-der-wichtigsten-informatik-probleme-unserer-zeit-gelost-haben",
        rating: 404,
      tags: ["TINF"],
    },
  ];

  const {id}:any = useParams();

  let item = faqitems.filter(item => item.id==id);
  console.log(item)
  if (item.length > 0) return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 gap-4">
      <div>
        <p className="text-gray-400">originale Frage:</p>
        <div className="border bg-white rounded-lg shadow-md p-4">
          <p className="text-2xl font-semibold" text-justify>
            {item[0].title}
          </p>
          <p className="text-gray-500 mt-2">{item[0].description}</p>
          <div className="flex justify-between">
            <p className="text-indigo-400">{item[0].author}</p>
            <button className="flex gap-2 text-indigo-400" type="button">
              {item[0].rating}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <Answer
            author="Adrian"
            content="Flankencodierung ist ein weg um Fehler durch Spannugs-Schwankungen zu umgehen!"
            votes={2}
          />
          <Answer
            author="Clemens Cap"
            content="Der Manchester-Code (auch bekannt als Phase Encoding (PE) bzw. Richtungstaktschrift[1]) ist ein Leitungscode, der bei der Kodierung das Taktsignal erhält. Dabei wird die binäre Phasenlage (entweder 0° oder 180°) eines Rechtecksignals von einer Bitfolge bestimmt. Der Manchester-Code stellt damit eine Form der binären Phasenumtastung (engl. binary phase-shift keying) dar. Er wird u. a. beim AS-Interface, bei 10-Mbit/s-Ethernet nach der Norm IEEE 802.3 und im Wasserzeichen der Eurobanknoten als Sicherheitsmerkmal eingesetzt.
Aus der Phasenverschiebung folgt, dass die Flanken des Signals, die bei der Mitte einer Periode des Taktsignals auftreten, die Information tragen."
            votes={46}
          />
        </div>
        <form>
          <div className="w-full md:w-full px-3 mb-6">
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 mt-4 leading-tight focus:outline-none  focus:border-gray-500"
              type="text"
              placeholder="Comment on this thread..."
              required
            />
          </div>
        </form>
      </div>
    </div>
  );

  return(
    <Redirect to="/forum" />
  )
}

const Answer = ({ votes, author, content }: any) => (
  <div className="flex mt-4">
    <div className="ml-10 border-l-2 border-indigo-400"></div>
  <div className="ml-10 mr-4 flex-grow">
    <p className="text-gray-700 text-justify">{content}</p>
    <div className="flex justify-between">
      <p className="text-indigo-400">{author}</p>
      <button className="flex gap-2 text-indigo-400 hover:text-indigo-500" type="button">
        {votes}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
        </svg>
      </button>
    </div>
  </div>
  </div>
);

export default QuestionDetail;
