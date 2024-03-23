import useHttps from "../../../../hooks/useHttps";
import UpdatePostModal from "../../../ui/modal/UpdatePostModal";
import classes from "./Table.module.css";
import React, { useState } from "react";

function Table({ posts, setReload, tags, reload }) {
  const [isOpen, setIsOpen] = useState(false);
  const { loading, fetchData } = useHttps();
  const [updateItem, setUpdateItem] = useState({
    title: "",
    description: "",
    tags: [],
  });
  const onDeletePost = (id) => {
    const req = {
      url: `/posts/${id}`,
      config: { method: "DELETE" },
    };
    fetchData(req, (data) => {
      console.log(data);
    });
    setReload(true);
  };
  const onUpdate = (row) => {
    setIsOpen(true);
    setUpdateItem(row);
  };

  return (
    <>
      <UpdatePostModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setReaload={setReload}
        tags={tags}
        item={updateItem}
        reload={reload}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
          <tr style={{ height: "30px" }} />
        </thead>
        <tbody>
          {!loading &&
            posts.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td style={{ width: "200px" }}>{row.title}</td>
                <td style={{ width: "200px" }}>{row.description}</td>
                <td style={{ width: "200px" }}>
                  {row.tags &&
                    row.tags.map((tag, i) => (
                      <span key={i}>
                        {tag + `${i !== row.tags.length && ", "} `}
                      </span>
                    ))}
                </td>
                <td style={{ width: "130px" }}>
                  <button onClick={() => onUpdate(row)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                    </svg>
                  </button>
                  <button onClick={() => onDeletePost(row.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-trash3-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
