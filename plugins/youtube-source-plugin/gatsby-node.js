const fetch = require("node-fetch").default

const POST_NODE_TYPE = `YoutubeVideo`;
const YOUR_API_KEY = "AIzaSyA5Y9_rqlwOCd_AtdAK5yJXF0PaCnlCcag";
const CHANNEL_ID = "UCLUtfY3y9rIfZ8AirHJ7uPg";
const YOUTUBE_VIDEO_WATCH_URL_BASE = "https://www.youtube.com/watch?v=";

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
}) => {
  const { createNode } = actions;

  const { items } = await getYoutubeVideosAsync();
  const videosTags = await getYoutubeVideosTagsAsync(items);

  // loop through data and create Gatsby nodes
  items.forEach((item, index) => {
    const { videoId } = item.id
    const videoItem = {
      ...item.snippet,
      videoId,
      watchUrl: YOUTUBE_VIDEO_WATCH_URL_BASE + videoId,
      tags: videosTags[index],
    }

    return createNode({
      ...videoItem,
      id: createNodeId(`${POST_NODE_TYPE}-${item.etag}`),
      parent: null,
      children: [],
      internal: {
        type: POST_NODE_TYPE,
        content: JSON.stringify(videoItem),
        contentDigest: createContentDigest(videoItem),
      },
    })
  });

  return;
}

async function getYoutubeVideosTagsAsync(videos) {
  const videoIds = videos.map(({ id }) => id.videoId).join("&id=");
  const YOUTUBE_VIDEO_DETAILS_URL = `https://youtube.googleapis.com/youtube/v3/videos?id=${videoIds}`;
  // part=snippet&key=${YOUR_API_KEY}&id=${videoIds}
  const extractEndpoint = new URL(YOUTUBE_VIDEO_DETAILS_URL);
  extractEndpoint.searchParams.append("part", "snippet");
  extractEndpoint.searchParams.append("key", YOUR_API_KEY);
  const { items } = await (await fetch(extractEndpoint.toString())).json();
  return items.map(({ snippet }) => snippet.tags);
}

async function getYoutubeVideosAsync() {
  const BASE_ENDPOINT = `https://youtube.googleapis.com/youtube/v3/search`
  // part=snippet&type=video&maxResults=20&channelId=UCLUtfY3y9rIfZ8AirHJ7uPg&key=${YOUR_API_KEY}
  const extractEndpoint = new URL(BASE_ENDPOINT);
  extractEndpoint.searchParams.append("part", "snippet");
  extractEndpoint.searchParams.append("type", "video");
  extractEndpoint.searchParams.append("maxResults", 20);
  extractEndpoint.searchParams.append("channelId", CHANNEL_ID);
  extractEndpoint.searchParams.append("key", YOUR_API_KEY);

  const youtubeVideo = await (await fetch(extractEndpoint.toString())).json();
  // console.info("youtubeVideo:\n", JSON.stringify(youtubeVideo, undefined, 4));
  return youtubeVideo;
}
