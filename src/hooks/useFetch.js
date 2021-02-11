import { useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const useFetch = (obj, type) => {
  const { setLoading, url } = useContext(GlobalContext);

  useEffect(() => {
    if (url !== null) {
      if (!url.includes(type.substring(0, type.length - 1).toLowerCase())) {
        setLoading(true);
        return;
      }
    } else if (url === null) {
      return;
    }
    const getData = async () => {
      let prevButton = document.getElementById("prevButton");
      let nextButton = document.getElementById("nextButton");
      let response = await fetch(url);
      let responseData = await response.json();
      obj.setPrevPage(responseData.info.prev);
      obj.setNextPage(responseData.info.next);
      obj.setData([...responseData.results]);

      // if (responseData.info.prev === null) {
      //   prevButton.style.pointerEvents = "none";
      //   prevButton.style.opacity = 0.6;
      // } else {
      //   prevButton.style.pointerEvents = "auto";
      //   prevButton.style.opacity = 1;
      // }
      //
      // if (responseData.info.next === null) {
      //   nextButton.style.pointerEvents = "none";
      //   nextButton.style.opacity = 0.6;
      // } else {
      //   nextButton.style.pointerEvents = "auto";
      //   nextButton.style.opacity = 1;
      // }
    };
    setLoading(false);
    getData();
    window.scrollTo(0, 0);
    return () => setLoading(true);
  }, [url]);
};
export default useFetch;