const sermonAudioApiBaseUrl = "https://api.sermonaudio.com/v2/node/";

export const getSermons = async (pageSize, series = "") => {
  let url = `${sermonAudioApiBaseUrl}sermons?&requireAudio=true&includePublished=true&page=1&lite=true&liteBroadcaster=true&pageSize=${pageSize}&broadcasterID=lasvegasrpc`;
  if (series) url = url + `&series=${series}`;
  const headers = {
    "Content-Type": "application/json",
    "X-Api-Key": import.meta.env.SERMON_AUDIO_SECRET,
  };
  const response = await fetch(url, {
    method: "GET",
    headers,
  });
  const data = await response.json();
  return data.results;
};
