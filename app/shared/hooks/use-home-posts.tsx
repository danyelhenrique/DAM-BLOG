import { useContext } from "react";
import { HomeContext } from "../context/home";

export function useHomePosts<T>() {
  const { state, dispatch } = useContext(HomeContext);

  const setTodaysPosts = (data: any) => {
    const payload = data[0];
    const lasTag = payload.tags.reverse()[0];
    payload.tag = lasTag;

    dispatch({ type: "@posts/todays", payload });
  };

  const setAllHomePost = (data: any) => {
    const payloadHighlight = data?.highlightPost[0];
    const lasTag = payloadHighlight.tags.reverse()[0];
    payloadHighlight.tag = lasTag;

    dispatch({ type: "@posts/highlight", payload: payloadHighlight });
    dispatch({ type: "@posts/todays", payload: data?.todaysPost });
  };

  return { setTodaysPosts, setAllHomePost, state, dispatch };
}
