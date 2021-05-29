import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Tag = ({title}:any) => (
  <div className="bg-blue-500 text-white inline-flex items-center text-sm rounded shadow-lg overflow-hidden">
    <span className="leading-relaxed truncate max-w-xs px-2">
      {title}
    </span>
  </div>
);

// Component
function Gruppen() {
  const [gruppen, setGruppen] = useState<any>();
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    console.log("search", search)
    fetch(
      "https://api.noc-rostock.space/search-group?content=" +
        (search || "") +
        "&$skip="+offset+"&$limit="+10,
      {}
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setGruppen(data.data);
        setOffset(Number(data.skip));
        setTotal(Number(data.total));
      });
  }, [search])

    return (
      <div className="mx-auto w-full max-w-7xl items-start">
        <div className="bg-white pb-4 px-4 rounded-md w-full shadow-lg">
          <div className="flex justify-between w-full pt-6 ">
            <p className="ml-3 text-lg font-semibold"> Alle Gruppen</p>
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
          <div className="overflow-x-auto mt-6">
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
                  <th className="px-4 py-2 bg-gray-200 ">Name</th>
                  <th className="px-4 py-2 bg-gray-200">Modul</th>
                  <th className="px-4 py-2 bg-gray-200">Tags</th>
                  <th className="px-4 py-2 bg-gray-200">Mitglieder</th>
                </tr>
              </thead>
              <tbody className="text-sm font-normal text-gray-700">
                {gruppen?.map((m:any,i:number) => <Gruppe key={i} {...m}/>)}
              </tbody>
            </table>
          </div>
          <div
            id="pagination"
            className="w-full flex justify-center border-t border-gray-100 pt-4 items-center"
          >
            <svg
              className="h-6 w-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7072C13.6834 17.0977 14.3166 17.0977 14.7071 16.7072C15.0977 16.3167 15.0977 15.6835 14.7071 15.293L11.4142 12L14.7071 8.70712C15.0977 8.31659 15.0977 7.68343 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
                  fill="#2C2C2C"
                />
              </g>
            </svg>

            {Array.from(
              { length: Math.floor(total / 10) + 1 },
              (_, i) => i + 1
            ).map((v) =>
              v == Math.floor(offset / 10) + 1 ? (
                <p className="leading-relaxed cursor-pointer mx-2 text-blue-600 hover:text-blue-600 text-sm">
                  {v}
                </p>
              ) : (
                <p className="leading-relaxed cursor-pointer mx-2 text-sm hover:text-blue-600">
                  {v}
                </p>
              )
            )}

            <svg
              className="h-6 w-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 12C15 11.7348 14.8946 11.4804 14.7071 11.2929L10.7071 7.2929C10.3166 6.9024 9.6834 6.9024 9.2929 7.2929C8.9024 7.6834 8.9024 8.3166 9.2929 8.7071L12.5858 12L9.2929 15.2929C8.9024 15.6834 8.9024 16.3166 9.2929 16.7071C9.6834 17.0976 10.3166 17.0976 10.7071 16.7071L14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12Z"
                fill="#18A0FB"
              />
            </svg>
          </div>
        </div>
      </div>
    );
}

const Gruppe = ({ id, name, module, tags, users }: any) => {
  const history = useHistory();
  return(
  <tr
    className="hover:bg-gray-100 border-b border-gray-200 py-10 cursor-pointer"
    onClick={() => history.push("/group/"+id)}
  >
    <td className="px-4 py-4">{name}</td>
    <td className="px-4 py-4">{module || <p className="font-mono">[NO MODULE]</p>}</td>
    <td className="px-4 py-4 flex gap-2">
      {tags  && tags.map((t:any, i:number) => (
        <Tag id={i} title={t.name} />
      ))}
      {!tags && <p className="uppercase font-mono">[Not tagged]</p>}
    </td>
    <td className="px-4 py-4">{users.length}</td>
  </tr>
)};

export default Gruppen;