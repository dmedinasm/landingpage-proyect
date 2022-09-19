const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCvbKGLFg-bgjWvAglehxOFw&part=snippet%2Cid&order=date&maxResults=9";

const content = null || document.getElementById('content');

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6275d0b2d5msh980a6cf2a2ab283p1fb68fjsn4e10ec9d9987",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlAPi) {
  const response = await fetch(urlAPi, options);
  const data = response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = ` ${videos.items.map(video => 
        `
                <div class="group relative">
                <div
                  class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                  <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                  <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                  </h3>
                </div>
              </div>
            `
      ).slice(0,4).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();


