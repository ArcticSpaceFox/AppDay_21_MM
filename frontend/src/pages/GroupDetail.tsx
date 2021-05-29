const Tag = ({ title }: any) => (
  <div className="bg-blue-500 text-white inline-flex items-center text-sm rounded shadow-lg overflow-hidden">
    <span className="leading-relaxed truncate max-w-xs px-2">{title}</span>
  </div>
);

function GroupDetail() {
  return (
    <div className="mx-auto w-full max-w-7xl items-start">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="flex justify-between">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Gruppen Info
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details zur Gruppe finden sie hier
            </p>
          </div>
          <div className="flex items-center mr-6 gap-4">
            <button className="py-1 px-2 text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-red-200 rounded shadow-md">
              Verlassen
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                RNDS pros
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Modul</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Rechnernetze und Datensicherheit
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Tags</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <Tag title="Netwerke" />
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Gruppen Mitglieder
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex gap-2">
                <Tag title="John Cena" />
                <Tag title="Mathe Mann" />
                <Tag title="Karsten Wolf" />
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Beschreibung
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Die Entwicklung in der Rechentechnik begann mit autonomen
                Rechnern, die nur von einem Nutzer zur Zeit verwendet werden
                konnten, über zentrale Großrechner, die ihre Rechenleistung
                mehreren Nutzern gleichzeitig anboten, welche jedoch meist in
                unmittelbarer räumlicher Nähe der Rechenanlagen über Terminals
                angeschlossen waren. Ende der sechziger Jahre wurde mit dem
                ARPA-Netz die digitale Kommunikation erprobt und Mitte der
                siebziger Jahre in einem bis heute geltenden Standard
                festgelegt. Die dabei eingeführte Technik konnte zum Anschluss
                an zentrale Rechner genutzt werden. Gleichzeitig entstand mit PC
                und Arbeitsplatzrechnern eine Ablösung des
                Zentralrechnerkonzepts hin zu dezentraler Rechenleistung. Damit
                wurden zwar Leistungsprobleme gelöst, aber die Kommunikation
                unter den Teilnehmern des Rechenbetriebs erschwert. Durch lokale
                Netze und später durch den Anschluss an das Internet konnten
                diese Probleme überwunden werden. Wir beschäftigen uns genau mit
                diesen!
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Dateien</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="ml-2 flex-1 w-0 truncate">
                        uebersicht.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="ml-2 flex-1 w-0 truncate">
                        ha_serie_1.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default GroupDetail;
