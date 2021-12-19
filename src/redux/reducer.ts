import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_SUCCESS,
  GET_PUBLISHER_DATA,
} from "../constants/types";

const initialState: any = {
  news: [],
  publishers: [],
  publisherData: [],
  error: null,
};

export default function reducer(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_NEWS_SUCCESS:
      const publishers = new Set();
      payload.forEach((news: any) => publishers.add(news.PUBLISHER));
      //@ts-ignore
      localStorage.setItem("news", JSON.stringify(payload));
      //@ts-ignore

      return { ...state, news: payload, publishers: [...publishers] };

    case FETCH_NEWS_FAILURE:
      return { ...state, error: payload };

    case GET_PUBLISHER_DATA:
      let news;
      if (state.news ) {
        //@ts-ignore
        news = JSON.parse(localStorage.getItem("news"));
      } else news = state.news;
      const publisherData = news.filter(
        (news: any) => (news.PUBLISHER .replace(/[^a-zA-Z0-9-. ]+/i, "")).replace(/[^a-zA-Z0-9-. ]+/i, "") === payload
      );
      //   publisherData.sort((val1:any,val2:any)=>val1.TIMESTAMP-val2.TIMESTAMP)
      return { ...state, publisherData };
    default:
      return { ...state };
  }
}
