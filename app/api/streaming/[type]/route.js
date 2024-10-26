import data from "@/src/data/sample.json";

export const GET = (request, { params }) => {
  console.log(params.type);
  if (data !== null) {
    return Response.json(
      data.entries
        .filter((item) => item.programType == params.type)
        .map((item, index) => {
          return {
            ...item,
            images: {
              ...item.images,
              PosterArt: {
                ...item.images.PosterArt,
                // url: 'https://placehold.co/1000x1500.png',
                url: `https://picsum.photos/1000/1500.jpg?ramdon=${index + 1}`,
              },
            },
          };
        })
    );
  }
  return Response.json([]);
};
