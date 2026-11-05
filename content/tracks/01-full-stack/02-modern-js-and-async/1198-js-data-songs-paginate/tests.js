const SONGS = [
  {id: 1, title: "Velvet", seconds: 190, plays: 1559, artist: "The Pines", mood: "happy"},
  {id: 2, title: "Gravity", seconds: 133, plays: 6456, artist: "Kairo", mood: "dark"},
  {id: 3, title: "Static", seconds: 340, plays: 1296, artist: "Kairo", mood: "dark"},
  {id: 4, title: "Halo", seconds: 211, plays: 3334, artist: "Nova", mood: "calm"},
  {id: 5, title: "Neon", seconds: 136, plays: 7958, artist: "Kairo", mood: "dark"},
  {id: 6, title: "Tides", seconds: 409, plays: 7239, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Lanterns", seconds: 313, plays: 2708, artist: "Kairo", mood: "calm"},
  {id: 8, title: "Echoes", seconds: 236, plays: 4338, artist: "Nova", mood: "dark"}
];

test("with 1, 3", () => {
  expect(pageOfSongs(SONGS, 1, 3)).toEqual({"items":["Velvet","Gravity","Static"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfSongs(SONGS, 2, 3)).toEqual({"items":["Halo","Neon","Tides"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfSongs(SONGS, 3, 3)).toEqual({"items":["Lanterns","Echoes"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfSongs(SONGS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
