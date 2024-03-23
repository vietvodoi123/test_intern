import classes from "./Main.module.css";
import React, { useState, useEffect } from "react";
import MainHeader from "./MainHeader/MainHeader";
import useHttps from "../../../hooks/useHttps";
import Table from "./table/Table";
import Pagination from "./pagination/Pagination";

function Main() {
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [posts, setPosts] = useState();
  const { loading, fetchData } = useHttps();
  const [reload, setReload] = useState(0);

  // get tags
  useEffect(() => {
    const req = {
      url: "/posts/tags",
    };

    fetchData(req, (data) => {
      setTags(data);
    });
  }, []);

  // reset ve page = 1
  useEffect(() => {
    setPage(1);
  }, [tag, title]);

  // get post
  useEffect(() => {
    setReload(false);
    const req = {
      url: "/posts",
    };
    let params = {};
    if (page !== 1) {
      params.page = page;
    }
    if (title.trim() !== "") {
      params.title = title;
    }
    if (tag !== "") {
      params.tags = tag;
    }
    fetchData(
      req,
      (data) => {
        setPosts(data);
      },
      params
    );
  }, [page, tag, title, reload]);

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <MainHeader
          setReload={setReload}
          title={title}
          setTitle={setTitle}
          tag={tag}
          setTag={setTag}
          reload={reload}
          tags={tags}
        />
        {loading && !posts && <p>Loading...</p>}
        {!loading && posts && posts.posts.length === 0 && <p>No data</p>}
        {!loading && posts && posts.posts && (
          <Table
            setReload={setReload}
            posts={posts.posts}
            tags={tags}
            reload={reload}
          />
        )}

        {!loading && posts && (
          <Pagination
            setPage={setPage}
            total_page={posts.total_page}
            current_page={posts.current_page}
          />
        )}
      </div>
    </div>
  );
}

export default Main;
