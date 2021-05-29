import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../context/User";

function Forum() {
  const faqitems: Array<{id:number, title:string, author:string, description:string, tags: Array<string>}> = [
    {
      id: 1,
      title: "Was genau ist Flankencodierung?",
      author: "John Cena",
      description:
        "In der letzten Übung hat Herr Mundt uns Flankencodierung erklärt, aber ich habe es nicht ganz verstanden.",
      tags: ["RNDS", "Codierung"],
    },
    {
      id:2,
      title: "Wie hat Cesar das noch macl verschlüsselt?",
      author: "Augustus",
      description:
        "Ich habe diese Nachricht aber kann sie nicht lesen, irgendwie verschlüsselt?",
      tags: ["RNDS", "Crypto"],
    },
    {
      id:3,
      title: "Was soll das heißen Norbert Blum hat das P=NP Problem gelöst?!",
      author: "John Cena",
      description:
        "https://www.vice.com/de/article/evvp34/deutscher-soll-gerade-eines-der-wichtigsten-informatik-probleme-unserer-zeit-gelost-haben",
      tags: ["TINF"],
    },
  ];

  const [search, setSearch] = useState("");

  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="flex gap-4">
        <div className="">
          <p className="font-mono text-4xl text-indigo-600">Forum</p>
          <p className="mt-4">Du hast fragen an alle Studis?</p>
          <p className="text-gray-500 mb-4">
            Hier darfst du Fragen stellen oder beantworten
          </p>
          <div className="w-full sm:w-64 inline-block relative ">
            <input
              type="text"
              name="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="leading-snug border border-gray-300 block w-full appearance-none bg-gray-100 text-sm text-gray-600 py-1 px-4 pl-8 rounded-lg"
              placeholder="Suchen..."
            />

            <div className="pointer-events-none absolute pl-3 inset-y-0 left-0 flex items-center px-2 text-gray-300">
              <svg
                className="fill-current h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 511.999 511.999"
              >
                <path d="M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-grow grid grid-cols-1 gap-4">
          {faqitems?.filter((item) => (item.title.indexOf(search) !== -1))?.map((f:any, i:number) => (
              <FAQitem
                key={i}
                {...f}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

const Tag = ({ title }: any) => (
  <div className="bg-blue-500 text-white inline-flex items-center text-sm rounded shadow-lg overflow-hidden">
    <span className="leading-relaxed truncate max-w-xs px-2">{title}</span>
  </div>
);

const FAQitem = ({ id, title, description, tags, author }: any) => (
  <Link to={`/question/${id}`}>
  <div className="h-20 p-4 bg-white border shadow-sm rounded-md hover:shadow-xl transition-shadow cursor-pointer">
    <div className="flex justify-between">
      <div>
      <p className="text-xl font-semibold inline">{title}</p>
<p className="text-indigo-400 inline"> - {author}</p>
      </div>
      <div className="flex gap-2">
        {tags.map((t:string,i:number) => <Tag key={i} title={t}/>)}
      </div>
    </div>
    <p className="max-w-4xl truncate text-gray-500">{description}</p>
  </div>
  </Link>
);

export default Forum;
